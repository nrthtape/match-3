import * as PIXI from "pixi.js";
import { gsap } from "gsap";
import { PixiPlugin } from "gsap/PixiPlugin";
import { Loader } from "./Loader";
import { ScenesManager } from "./ScenesManager";

class Application {
    run(config) {
        PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST
        gsap.registerPlugin(PixiPlugin);
        PixiPlugin.registerPIXI(PIXI);

        this.config = config;

        this.app = new PIXI.Application({resizeTo: window});
        document.body.appendChild(this.app.view);

        this.scenes = new ScenesManager();
        this.app.stage.interactive = true;
        this.app.stage.addChild(this.scenes.container);

        this.loader = new Loader(this.app.loader, this.config);
        this.loader.preload().then(() => this.start());
    }

    solid(color) {
        return new PIXI.Graphics()
            .beginFill(color)
            .drawRect(0, 0, 100, 100)
            .endFill();
    }

    res(key) {
        return this.loader.resources[key].texture;
    }

    sprite(key) {
        return new PIXI.Sprite(this.res(key));
    }

    start() {
        this.scenes.start("Game");
    }
}

export const App = new Application();
