
const _scene = new Entity('_scene')
engine.addEntity(_scene)
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
_scene.addComponentOrReplace(transform)

const glossyAethereaTiles = new Entity('glossyAethereaTiles')
engine.addEntity(glossyAethereaTiles)
glossyAethereaTiles.setParent(_scene)
const gltfShape = new GLTFShape("models/CityTile.glb")
gltfShape.withCollisions = true
gltfShape.isPointerBlocker = true
gltfShape.visible = true
glossyAethereaTiles.addComponentOrReplace(gltfShape)
const transform2 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
glossyAethereaTiles.addComponentOrReplace(transform2)

const lamboGlb = new Entity('lamboGlb')
engine.addEntity(lamboGlb)
lamboGlb.setParent(_scene)
const transform3 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.6682796478271484, 0.6682796478271484, 0.6682796478271484)
})
lamboGlb.addComponentOrReplace(transform3)
const gltfShape2 = new GLTFShape("models/LAMBO.glb1.glb")
gltfShape2.withCollisions = true
gltfShape2.isPointerBlocker = true
gltfShape2.visible = true
lamboGlb.addComponentOrReplace(gltfShape2)
