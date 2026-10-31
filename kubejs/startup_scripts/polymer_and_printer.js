// Minecraft 1.21.1 / NeoForge / KubeJS
// Names are loaded from assets/kubejs/lang/en_us.json and ru_ru.json.
// Changing item registration requires restarting Minecraft.
StartupEvents.registry('item', event => {
  event.create('pocket_3d_printer')
    .maxStackSize(1)

  event.create('polymer')
    .maxStackSize(64)
})


