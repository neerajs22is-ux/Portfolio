import * as THREE from "three";

export const characterColors = {
  skin: "#c98e5f",
  hair: "#151009",
  shirt: "#f2f2f2",
  pant: "#252b36",
  shoe: "#17120e",
  sole: "#2b2119",
};

// three.js sanitizes node names on load (e.g. "Plane.007" -> "Plane007"),
// so we compare with all non-alphanumeric characters stripped.
const normalize = (name: string) => name.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

const skinMeshes = ["Ear", "Ear.001", "Neck", "Hand", "Plane.007"];
const colorMap = new Map<string, THREE.Color>();

const setColor = (name: string, hex: string) =>
  colorMap.set(normalize(name), new THREE.Color(hex));

setColor("hair", characterColors.hair);
setColor("BODY.SHIRT", characterColors.shirt);
setColor("Pant", characterColors.pant);
setColor("Shoe", characterColors.shoe);
setColor("Sole", characterColors.sole);
skinMeshes.forEach((name) => setColor(name, characterColors.skin));

export default function restyleCharacter(scene: THREE.Object3D) {
  const processedMaterials = new Set<THREE.Material>();

  scene.traverse((child) => {
    const mesh = child as THREE.Mesh;
    if (!mesh.isMesh || !mesh.material) return;

    const original = Array.isArray(mesh.material)
      ? mesh.material[0]
      : mesh.material;
    if (!original || processedMaterials.has(original)) return;

    const replacement = original.clone();
    const standard = replacement as THREE.MeshStandardMaterial;
    const target = colorMap.get(normalize(mesh.name));

    if (target && standard.color && !(standard.map || standard.emissiveMap)) {
      standard.color.copy(target);
      if (normalize(mesh.name) === normalize("hair")) standard.roughness = 0.85;
      if (normalize(mesh.name) === normalize("BODY.SHIRT"))
        standard.roughness = 0.75;
    }

    mesh.material = replacement;
    processedMaterials.add(replacement);
  });
}
