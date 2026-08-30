"use client";
import React, { useRef, useMemo, useState, useCallback, Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Html, useTexture } from "@react-three/drei";
import * as THREE from "three";
import { cn } from "@/lib/utils";

// ============================================================================
// Types
// ============================================================================

export interface GlobeMarker {
  lat: number;
  lng: number;
  src: string;
  label?: string;
  size?: number;
  offset?: {
    east?: number;
    north?: number;
    lift?: number;
  };
}

export interface Globe3DConfig {
  /** Globe radius */
  radius?: number;
  /** Globe base color (used as fallback or tint) */
  globeColor?: string;
  /** URL to the Earth texture map */
  textureUrl?: string;
  /** URL to the bump/elevation map for terrain */
  bumpMapUrl?: string;
  /** Whether to show atmosphere glow */
  showAtmosphere?: boolean;
  /** Atmosphere color */
  atmosphereColor?: string;
  /** Atmosphere intensity */
  atmosphereIntensity?: number;
  /** Atmosphere blur/softness (higher = more diffuse, default 3) */
  atmosphereBlur?: number;
  /** Terrain bump scale (0 = flat, higher = more pronounced) */
  bumpScale?: number;
  /** Auto rotate speed (0 = disabled) */
  autoRotateSpeed?: number;
  /** Enable zoom */
  enableZoom?: boolean;
  /** Enable pan */
  enablePan?: boolean;
  /** Min zoom distance */
  minDistance?: number;
  /** Max zoom distance */
  maxDistance?: number;
  /** Initial rotation */
  initialRotation?: { x: number; y: number };
  /** Marker default size */
  markerSize?: number;
  /** Show wireframe overlay */
  showWireframe?: boolean;
  /** Wireframe color */
  wireframeColor?: string;
  /** Ambient light intensity */
  ambientIntensity?: number;
  /** Point light intensity */
  pointLightIntensity?: number;
  /** Background color (null for transparent) */
  backgroundColor?: string | null;
}

interface Globe3DProps {
  /** Array of markers to display on the globe */
  markers?: GlobeMarker[];
  /** Globe configuration */
  config?: Globe3DConfig;
  /** Additional CSS classes */
  className?: string;
  /** Callback when a marker is clicked */
  onMarkerClick?: (marker: GlobeMarker) => void;
  /** Callback when a marker is hovered */
  onMarkerHover?: (marker: GlobeMarker | null) => void;
}

// ============================================================================
// Constants - Earth Texture URLs (NASA Blue Marble)
// ============================================================================

const DEFAULT_EARTH_TEXTURE =
  "https://unpkg.com/three-globe@2.31.0/example/img/earth-blue-marble.jpg";
const DEFAULT_BUMP_TEXTURE =
  "https://unpkg.com/three-globe@2.31.0/example/img/earth-topology.png";

// ============================================================================
// Utility Functions
// ============================================================================

/**
 * Convert latitude/longitude to 3D cartesian coordinates
 */
function latLngToVector3(
  lat: number,
  lng: number,
  radius: number,
): THREE.Vector3 {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);

  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);

  return new THREE.Vector3(x, y, z);
}

function getTangentFrame(position: THREE.Vector3) {
  const normal = position.clone().normalize();
  const worldUp = new THREE.Vector3(0, 1, 0);
  const east = new THREE.Vector3().crossVectors(worldUp, normal).normalize();
  const north = new THREE.Vector3().crossVectors(normal, east).normalize();

  return { east, north, normal };
}

function createCircularTexture(source: THREE.Texture) {
  const image = source.image as CanvasImageSource | undefined;
  if (!image) return source;

  const canvas = document.createElement("canvas");
  canvas.width = 256;
  canvas.height = 256;

  const context = canvas.getContext("2d");
  if (!context) return source;

  context.clearRect(0, 0, canvas.width, canvas.height);
  context.save();
  context.beginPath();
  context.arc(128, 128, 122, 0, Math.PI * 2);
  context.clip();
  context.drawImage(image, 0, 0, canvas.width, canvas.height);
  context.restore();

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.needsUpdate = true;

  return texture;
}

// ============================================================================
// Marker Component (static - rotation handled by parent group)
// ============================================================================

interface MarkerProps {
  marker: GlobeMarker;
  radius: number;
  defaultSize: number;
  onClick?: (marker: GlobeMarker) => void;
  onHover?: (marker: GlobeMarker | null) => void;
}

function Marker({
  marker,
  radius,
  defaultSize,
  onClick,
  onHover,
}: MarkerProps) {
  const [hovered, setHovered] = useState(false);
  const groupRef = useRef<THREE.Group>(null);
  const worldSurfacePositionRef = useRef(new THREE.Vector3());
  const cameraDirectionRef = useRef(new THREE.Vector3());
  const { camera } = useThree();
  const flagTexture = useTexture(marker.src);
  const circularFlagTexture = useMemo(
    () => createCircularTexture(flagTexture),
    [flagTexture],
  );

  // Surface position (where the line starts)
  const surfacePosition = useMemo(() => {
    return latLngToVector3(marker.lat, marker.lng, radius * 1.001);
  }, [marker.lat, marker.lng, radius]);

  // Keep the pin vertical to the globe surface. Offsets are ignored while
  // balancing the pin system so the capital-to-flag line stays physically true.
  const topPosition = useMemo(() => {
    const { normal } = getTangentFrame(surfacePosition);
    const lift = marker.offset?.lift ?? 0.18;

    return surfacePosition
      .clone()
      .add(normal.multiplyScalar(radius * lift));
  }, [marker.offset?.lift, radius, surfacePosition]);

  const lineHeight = topPosition.distanceTo(surfacePosition);

  // Check if marker is facing the camera
  useFrame(() => {
    if (!groupRef.current) return;

    // Visibility must be based on the capital point on the globe, not on the
    // raised flag end. This prevents markers from showing through the back.
    const worldSurfacePos = worldSurfacePositionRef.current.copy(surfacePosition);
    groupRef.current.localToWorld(worldSurfacePos);

    const markerDirection = worldSurfacePos.normalize();
    const cameraDirection = cameraDirectionRef.current.copy(camera.position).normalize();
    const dot = markerDirection.dot(cameraDirection);

    groupRef.current.visible = dot > 0.42;

  });

  const handlePointerEnter = useCallback(() => {
    setHovered(true);
    document.body.style.cursor = "pointer";
    onHover?.(marker);
  }, [marker, onHover]);

  const handlePointerLeave = useCallback(() => {
    setHovered(false);
    document.body.style.cursor = "";
    onHover?.(null);
  }, [onHover]);

  const handleClick = useCallback(() => {
    onClick?.(marker);
  }, [marker, onClick]);

  const handlePointerOver = useCallback(
    (event: { stopPropagation: () => void }) => {
      event.stopPropagation();
      handlePointerEnter();
    },
    [handlePointerEnter],
  );

  const handlePointerOut = useCallback(
    (event: { stopPropagation: () => void }) => {
      event.stopPropagation();
      handlePointerLeave();
    },
    [handlePointerLeave],
  );

  const handleSpriteClick = useCallback(
    (event: { stopPropagation: () => void }) => {
      event.stopPropagation();
      handleClick();
    },
    [handleClick],
  );

  // Calculate line center and orientation
  const { lineCenter, lineQuaternion } = useMemo(() => {
    const center = surfacePosition.clone().lerp(topPosition, 0.5);

    // Calculate rotation to align cylinder with the direction from surface to top
    const direction = topPosition.clone().sub(surfacePosition).normalize();
    const quaternion = new THREE.Quaternion();
    quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), direction);

    return { lineCenter: center, lineQuaternion: quaternion };
  }, [surfacePosition, topPosition]);

  const markerSize = marker.size ?? defaultSize;
  const flagScale = hovered ? markerSize * 1.18 : markerSize;

  return (
    <group ref={groupRef}>
      {/* Pin line from surface to image - properly oriented */}
      <mesh position={lineCenter} quaternion={lineQuaternion}>
        <cylinderGeometry args={[0.005, 0.005, lineHeight, 10]} />
        <meshBasicMaterial
          color={hovered ? "#ffffff" : "#d7e3f7"}
          depthTest={false}
          transparent
          opacity={hovered ? 0.95 : 0.82}
        />
      </mesh>

      {/* Pin point at the surface */}
      <mesh position={surfacePosition} quaternion={lineQuaternion}>
        <coneGeometry args={[0.016, 0.038, 10]} />
        <meshBasicMaterial
          color={hovered ? "#ff7a18" : "#ef4444"}
          depthTest={false}
        />
      </mesh>

      <sprite
        position={topPosition}
        scale={[flagScale, flagScale, 1]}
        renderOrder={2}
        onClick={handleSpriteClick}
        onPointerOut={handlePointerOut}
        onPointerOver={handlePointerOver}
      >
        <spriteMaterial
          map={circularFlagTexture}
          transparent
          depthTest={false}
          depthWrite={false}
        />
      </sprite>

      <sprite
        position={topPosition}
        scale={[markerSize * 1.9, markerSize * 1.9, 1]}
        renderOrder={3}
        onClick={handleSpriteClick}
        onPointerOut={handlePointerOut}
        onPointerOver={handlePointerOver}
      >
        <spriteMaterial
          transparent
          opacity={0}
          depthTest={false}
          depthWrite={false}
        />
      </sprite>
    </group>
  );
}

// ============================================================================
// Rotating Globe with Markers (all rotate together)
// ============================================================================

interface RotatingGlobeProps {
  config: Required<Globe3DConfig>;
  markers: GlobeMarker[];
  onMarkerClick?: (marker: GlobeMarker) => void;
  onMarkerHover?: (marker: GlobeMarker | null) => void;
}

function RotatingGlobe({
  config,
  markers,
  onMarkerClick,
  onMarkerHover,
}: RotatingGlobeProps) {
  const groupRef = useRef<THREE.Group>(null);

  // Load Earth textures
  const [earthTexture, bumpTexture] = useTexture([
    config.textureUrl,
    config.bumpMapUrl,
  ]);

  const configuredEarthTexture = useMemo(() => {
    if (!earthTexture) return earthTexture;

    const texture = earthTexture.clone();
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.anisotropy = 16;
    texture.needsUpdate = true;

    return texture;
  }, [earthTexture]);

  const configuredBumpTexture = useMemo(() => {
    if (!bumpTexture) return bumpTexture;

    const texture = bumpTexture.clone();
    texture.anisotropy = 8;
    texture.needsUpdate = true;

    return texture;
  }, [bumpTexture]);

  // Create geometries
  const geometry = useMemo(() => {
    return new THREE.SphereGeometry(config.radius, 64, 40);
  }, [config.radius]);

  const wireframeGeometry = useMemo(() => {
    return new THREE.SphereGeometry(config.radius * 1.002, 48, 24);
  }, [config.radius]);

  useFrame((_, delta) => {
    if (!groupRef.current || config.autoRotateSpeed <= 0) return;
    groupRef.current.rotation.y += delta * config.autoRotateSpeed * 0.35;
  });

  return (
    <group
      ref={groupRef}
      rotation={[config.initialRotation.x, config.initialRotation.y, 0]}
    >
      {/* Main globe mesh with Earth texture */}
      <mesh geometry={geometry}>
        <meshStandardMaterial
          map={configuredEarthTexture}
          bumpMap={configuredBumpTexture}
          bumpScale={config.bumpScale * 0.05}
          roughness={0.7}
          metalness={0.0}
        />
      </mesh>

      {/* Wireframe overlay */}
      {config.showWireframe && (
        <mesh geometry={wireframeGeometry}>
          <meshBasicMaterial
            color={config.wireframeColor}
            wireframe
            transparent
            opacity={0.08}
          />
        </mesh>
      )}

      {/* Markers - now inside the rotating group */}
      {markers.map((marker, index) => (
        <Marker
          key={`marker-${index}-${marker.lat}-${marker.lng}`}
          marker={marker}
          radius={config.radius}
          defaultSize={config.markerSize}
          onClick={onMarkerClick}
          onHover={onMarkerHover}
        />
      ))}
    </group>
  );
}

// ============================================================================
// Atmosphere Component (stays static - doesn't rotate)
// ============================================================================

interface AtmosphereProps {
  radius: number;
  color: string;
  intensity: number;
  blur: number;
}

function Atmosphere({ radius, color, intensity, blur }: AtmosphereProps) {
  // blur controls the fresnel exponent: lower = more diffuse, higher = sharper edge
  // We invert it so higher blur value = more diffuse (lower exponent)
  const fresnelPower = Math.max(0.5, 5 - blur);

  const atmosphereMaterial = useMemo(() => {
    return new THREE.ShaderMaterial({
      uniforms: {
        atmosphereColor: { value: new THREE.Color(color) },
        intensity: { value: intensity },
        fresnelPower: { value: fresnelPower },
      },
      vertexShader: `
        varying vec3 vNormal;
        varying vec3 vPosition;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          vPosition = (modelViewMatrix * vec4(position, 1.0)).xyz;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 atmosphereColor;
        uniform float intensity;
        uniform float fresnelPower;
        varying vec3 vNormal;
        varying vec3 vPosition;
        void main() {
          float fresnel = pow(1.0 - abs(dot(vNormal, normalize(-vPosition))), fresnelPower);
          gl_FragColor = vec4(atmosphereColor, fresnel * intensity);
        }
      `,
      side: THREE.BackSide,
      transparent: true,
      depthWrite: false,
    });
  }, [color, intensity, fresnelPower]);

  return (
    <mesh scale={[1.12, 1.12, 1.12]}>
      <sphereGeometry args={[radius, 64, 32]} />
      <primitive object={atmosphereMaterial} attach="material" />
    </mesh>
  );
}

// ============================================================================
// Scene Component
// ============================================================================

interface SceneProps {
  markers: GlobeMarker[];
  config: Required<Globe3DConfig>;
  onMarkerClick?: (marker: GlobeMarker) => void;
  onMarkerHover?: (marker: GlobeMarker | null) => void;
}

function Scene({ markers, config, onMarkerClick, onMarkerHover }: SceneProps) {
  const { camera } = useThree();

  // Set initial camera position (pulled back to accommodate markers)
  React.useEffect(() => {
    camera.position.set(0, 0, config.radius * 3.5);
    camera.lookAt(0, 0, 0);
  }, [camera, config.radius]);

  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={config.ambientIntensity} />
      <directionalLight
        position={[config.radius * 5, config.radius * 2, config.radius * 5]}
        intensity={config.pointLightIntensity}
        color="#ffffff"
      />
      <directionalLight
        position={[-config.radius * 3, config.radius, -config.radius * 2]}
        intensity={config.pointLightIntensity * 0.3}
        color="#88ccff"
      />

      {/* Rotating Globe with Markers */}
      <RotatingGlobe
        config={config}
        markers={markers}
        onMarkerClick={onMarkerClick}
        onMarkerHover={onMarkerHover}
      />

      {/* Atmosphere (static) */}
      {config.showAtmosphere && (
        <Atmosphere
          radius={config.radius}
          color={config.atmosphereColor}
          intensity={config.atmosphereIntensity}
          blur={config.atmosphereBlur}
        />
      )}

      {/* Controls */}
      <OrbitControls
        makeDefault
        enablePan={config.enablePan}
        enableZoom={config.enableZoom}
        minDistance={config.minDistance}
        maxDistance={config.maxDistance}
        rotateSpeed={0.4}
        autoRotate={false}
        enableDamping
        dampingFactor={0.1}
      />
    </>
  );
}

// ============================================================================
// Loading Fallback
// ============================================================================

function LoadingFallback() {
  return (
    <Html center>
      <div className="flex shrink-0 flex-col items-center gap-3">
        <span className="inline-block shrink-0 text-sm text-neutral-400">
          Loading globe...
        </span>
      </div>
    </Html>
  );
}

// ============================================================================
// Main Globe3D Component
// ============================================================================

const defaultConfig: Required<Globe3DConfig> = {
  radius: 2,
  globeColor: "#1a1a2e",
  textureUrl: DEFAULT_EARTH_TEXTURE,
  bumpMapUrl: DEFAULT_BUMP_TEXTURE,
  showAtmosphere: false,
  atmosphereColor: "#4da6ff",
  atmosphereIntensity: 0.5,
  atmosphereBlur: 2,
  bumpScale: 1,
  autoRotateSpeed: 0.3,
  enableZoom: false,
  enablePan: false,
  minDistance: 5,
  maxDistance: 15,
  initialRotation: { x: 0, y: 0 },
  markerSize: 0.06,
  showWireframe: false,
  wireframeColor: "#4a9eff",
  ambientIntensity: 0.6,
  pointLightIntensity: 1.5,
  backgroundColor: null,
};

function Globe3DComponent({
  markers = [],
  config = {},
  className,
  onMarkerClick,
  onMarkerHover,
}: Globe3DProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const mergedConfig = useMemo(
    () => ({ ...defaultConfig, ...config }),
    [config],
  );

  React.useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { rootMargin: "320px 0px" },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className={cn("relative h-[500px] w-full", className)}>
      {isVisible && (
        <Canvas
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: "high-performance",
          }}
          dpr={[1, 1.35]}
          camera={{
            fov: 45,
            near: 0.1,
            far: 1000,
            position: [0, 0, mergedConfig.radius * 3.5],
          }}
          style={{
            background: mergedConfig.backgroundColor || "transparent",
          }}
        >
          <Suspense fallback={<LoadingFallback />}>
            <Scene
              markers={markers}
              config={mergedConfig}
              onMarkerClick={onMarkerClick}
              onMarkerHover={onMarkerHover}
            />
          </Suspense>
        </Canvas>
      )}
    </div>
  );
}

export const Globe3D = React.memo(Globe3DComponent);

export default Globe3D;
