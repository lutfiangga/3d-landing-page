import * as PostProcessing from "https://cdn.jsdelivr.net/npm/postprocessing@6.35.3/build/index.js";
      const customComposer = document.querySelector(
        "effect-composer#customComposer"
      );

      const grid = new PostProcessing.GridEffect();
      const sepia = new PostProcessing.SepiaEffect();
      // The camera is set automatically when added to the <effect-composer>
      const noisePass = new PostProcessing.EffectPass(undefined, grid, sepia);
      customComposer.addPass(noisePass);

      customComposer.nextElementSibling.addEventListener("input", (e) => {
        grid.scale = e.target.value;
        // Request a render frame, to update
        customComposer.queueRender();
      });
