/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

const modelsPath = "/src/assets/models";

export default function Coach(props) {
  const { nodes, materials } = useGLTF(modelsPath + "/furniture/coach.gltf");
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.cylinder.geometry}
        material={nodes.cylinder.material}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes.cylinder_1.geometry}
        material={nodes.cylinder_1.material}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes.cylinder_2.geometry}
        material={nodes.cylinder_2.material}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes.cylinder_3.geometry}
        material={nodes.cylinder_3.material}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes.cube.geometry}
        material={nodes.cube.material}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes.cube_1.geometry}
        material={nodes.cube_1.material}
        position={[0, 0.63, -0.38]}
        rotation={[-0.13, 0, 0]}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes.cylinder_4.geometry}
        material={nodes.cylinder_4.material}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes.cylinder_5.geometry}
        material={nodes.cylinder_5.material}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes.cube_2.geometry}
        material={nodes.cube_2.material}
        castShadow
        receiveShadow
      />
    </group>
  );
}

useGLTF.preload(modelsPath + "/furniture/coach.gltf");
