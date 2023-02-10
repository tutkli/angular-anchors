import {ChangeDetectionStrategy, Component, Input} from "@angular/core";
import {AnchorElementDirective} from "./anchor-element.directive";

@Component({
  selector: 'app-lorem',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <article [appAnchorElement]="title">
      <h2>{{ title }}</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a velit eu neque commodo dapibus. Phasellus eu
        accumsan leo. Nam nec orci augue. Phasellus iaculis ex vel ultrices ultrices. Integer eu nisi in augue dapibus
        dapibus. Praesent condimentum consectetur mauris, vitae aliquet tortor hendrerit ac. Ut consequat, elit non
        aliquam gravida, ipsum lorem luctus mi, non sagittis libero sapien eget libero. Mauris quis diam lorem. Nam
        aliquam nec augue lobortis vulputate. Sed quis congue eros, vitae semper urna. Vestibulum a nisl vel nisi
        accumsan bibendum ut vel orci. Nam euismod lectus non quam finibus, nec consectetur dui porta. Suspendisse eu
        aliquet odio. Phasellus suscipit mattis orci, a blandit dolor dictum non. In et odio malesuada, varius ante vel,
        placerat quam. Pellentesque turpis velit, dignissim eget molestie vitae, varius et nunc.</p>
      <p>Duis sit amet ipsum magna. Praesent sagittis velit quis neque bibendum, id hendrerit neque tristique. Aenean ac
        enim id sem auctor finibus. Donec lacinia fringilla velit eu volutpat. Sed sed ante ac tortor scelerisque
        tristique. Etiam ullamcorper eu nulla vel placerat. Pellentesque lacinia mollis bibendum. Cras a lectus nunc.
        Pellentesque ornare felis ut ligula viverra iaculis. Donec molestie magna ipsum. Mauris fermentum purus ac ipsum
        congue, ut venenatis massa commodo. Integer at nisi vehicula, semper dui ac, dapibus lacus. Morbi sit amet arcu
        in quam euismod accumsan.</p>
      <p>Aenean sit amet efficitur libero, quis finibus erat. Orci varius natoque penatibus et magnis dis parturient
        montes, nascetur ridiculus mus. Phasellus eu massa vehicula odio laoreet commodo. Nam hendrerit posuere magna
        vitae semper. Pellentesque molestie molestie urna nec tempus. Nunc pharetra diam neque, nec faucibus ipsum
        rutrum a. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse
        malesuada porta nisl, vel interdum dolor blandit et. Fusce iaculis ornare odio quis dictum. Quisque euismod nunc
        sit amet luctus tincidunt.</p>
    </article>
  `,
  imports: [
    AnchorElementDirective
  ],
  styles: [`

  `]
})
export class LoremComponent {
  @Input() title!: string;
}
