import {
  Component,
  OnInit,
  Renderer2,
  ViewChild,
  ElementRef,
  AfterViewInit
} from "@angular/core";
import Particle from "src/app/particles/Particle";

@Component({
  selector: "app-canvas",
  templateUrl: "./canvas.component.html",
  styleUrls: ["./canvas.component.scss"]
})
export class CanvasComponent implements OnInit, AfterViewInit {
  @ViewChild("canvas", { static: false }) canvasRef: ElementRef;

  particles: Particle[] = [];
  frequency = 20;

  c1: { canvas: HTMLCanvasElement; context: CanvasRenderingContext2D };
  c2: { canvas: HTMLCanvasElement; context: CanvasRenderingContext2D };
  c3: { canvas: HTMLCanvasElement; context: CanvasRenderingContext2D };

  tela: HTMLCanvasElement;
  canvas: CanvasRenderingContext2D;

  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    this.c1 = this.createCanvas({
      width: window.innerWidth,
      height: window.innerHeight
    });
    this.c2 = this.createCanvas({
      width: window.innerWidth,
      height: window.innerHeight
    });
    this.c3 = this.createCanvas({
      width: window.innerWidth,
      height: window.innerHeight
    });

    this.tela = this.c1.canvas;
    this.canvas = this.c1.context;
  }

  ngAfterViewInit(): void {
    this.renderer.appendChild(this.canvasRef.nativeElement, this.c3.canvas);
    // this.writeSvg(this.c2.context);
    this.writeText(this.c2.canvas, this.c2.context, "Some Text");

    setInterval(() => {
      this.populate();
    }, this.frequency);

    this.update();
  }
  update() {
    this.clear();
    this.particles = this.particles.filter(p => {
      return p.move();
    });
    this.maskCanvas();
    requestAnimationFrame(this.update.bind(this));
  }
  maskCanvas() {
    this.c3.context.drawImage(
      this.c2.canvas,
      0,
      0,
      this.c2.canvas.width,
      this.c2.canvas.height
    );
    this.c3.context.globalCompositeOperation = "source-atop";
    this.c3.context.drawImage(this.c1.canvas, 0, 0);
    this.blur(this.c1.context, this.c1.canvas, 20);
  }

  blur(context: any, canvas: any, amt: number) {
    context.filter = `blur(${amt}px)`;
    context.drawImage(canvas, 0, 0);
    context.filter = "none";
  }

  clear() {
    this.canvas.globalAlpha = 0.03;
    this.canvas.fillStyle = "#111111";
    this.canvas.fillRect(0, 0, this.tela.width, this.tela.height);
    this.canvas.globalAlpha = 1;
  }

  writeText(
    canvas: HTMLCanvasElement,
    context: CanvasRenderingContext2D,
    text: string
  ) {
    const size = 100;
    context.font = size + "px Arial";
    context.fillStyle = "#111111";
    context.textAlign = "center";
    const lineheight = 70;
    const lines = text.split("\n");
    for (let i = 0; i < lines.length; i++) {
      context.fillText(
        lines[i],
        canvas.width / 2,
        canvas.height / 2 +
          lineheight * i -
          (lineheight * (lines.length - 1)) / 3
      );
    }
  }

  writeSvg(context: CanvasRenderingContext2D) {
    context.ellipse(200, 200, 50, 50, 180, 45, 200, true);
    const img = new Image();
    img.onload = () => {
      context.drawImage(img, 0, 0);
    };
    img.src = "/assets/Vector.svg";
    console.log(img);
    context.clip();
  }

  createCanvas(properties: { width: number; height: number }): any {
    const canvas = document.createElement("canvas");
    canvas.width = properties.width;
    canvas.height = properties.height;
    const context = canvas.getContext("2d");
    return {
      canvas,
      context
    };
  }

  populate() {
    this.particles.push(
      new Particle(
        this.canvas,
        {
          x: window.innerWidth / 2,
          y: window.innerHeight / 2
        },
        window
      )
    );
    return this.particles.length;
  }
}
