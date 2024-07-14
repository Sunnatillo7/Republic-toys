import { Component } from '@angular/core';


interface IClients {
  name:string,
  profesion:string,
  imgSrc:string,
  comment:string
}

@Component({
  selector: 'app-client-card',
  standalone: true,
  imports: [],
  templateUrl: './client-card.component.html',
  styleUrl: './client-card.component.scss'
})
export class ClientCardComponent {


  clients:IClients[] = [
    {
      name: 'Reid Bingham',
      profesion: 'Futurist founder',
      imgSrc:'https://s.cafebazaar.ir/images/icons/net.wllppr.boys_wallpaper-6b31183c-1740-4c03-8573-81596e341c24_512x512.png?x-img=v1/resize,h_256,w_256,lossless_false/optimize',
      comment: 'My grandson has been getting eureka crates for about five years and there has never been any duplication. He also tells me that your kits are environmentally friendly and well designed. He really loved the globe last time the stand,the rotation, and the magnifying glass.'
    },
    {
      name:'Michele Rabinowitz',
      profesion:'Sales maneger',
      imgSrc:'https://i0.wp.com/pixahive.com/wp-content/uploads/2021/02/An-Indian-boy-375075-pixahive.jpg?fit=1702%2C2560&ssl=1',
      comment:'My 8yo doesnt realize hes learning but he has been retaining the knowledge learned. He looks forward to the crates every month and he has created a special place in his bedroom to display all the projects he has done.'
    },
    {
      name:'Benn Norton',
      profesion:'Sales maneger',
      imgSrc:'https://psychologybenefits.org/wp-content/uploads/2018/06/blog-aa-boys-depression.png',
      comment:'“The children of our country use the products of the republic of toys factory, which greatly contribute to the mental development of children and feed them with hope for the future. The toys of this factory are of very high quality!”'
    },
    {
      name:'Alex Birro',
      profesion:'Marcetolog',
      imgSrc:'https://fullyfilmy.in/cdn/shop/files/The-Boys_AI_MOCKUP.jpg?v=1696405510',
      comment:'Creativity is the ability to develop new, surprising and valuable ideas - and it is an essential skill of the 21st century. All of these are available at the Republic of Toys Factory!'
    },
    {
      name: 'Reid Bingham',
      profesion: 'Futurist founder',
      imgSrc:'https://s.cafebazaar.ir/images/icons/net.wllppr.boys_wallpaper-6b31183c-1740-4c03-8573-81596e341c24_512x512.png?x-img=v1/resize,h_256,w_256,lossless_false/optimize',
      comment: 'My grandson has been getting eureka crates for about five years and there has never been any duplication. He also tells me that your kits are environmentally friendly and well designed. He really loved the globe last time the stand,the rotation, and the magnifying glass.'
    },
    {
      name:'Benn Norton',
      profesion:'Sales maneger',
      imgSrc:'https://psychologybenefits.org/wp-content/uploads/2018/06/blog-aa-boys-depression.png',
      comment:'“The children of our country use the products of the republic of toys factory, which greatly contribute to the mental development of children and feed them with hope for the future. The toys of this factory are of very high quality!”'
    },
    {
      name:'Michele Rabinowitz',
      profesion:'Sales maneger',
      imgSrc:'https://i0.wp.com/pixahive.com/wp-content/uploads/2021/02/An-Indian-boy-375075-pixahive.jpg?fit=1702%2C2560&ssl=1',
      comment:'My 8yo doesnt realize hes learning but he has been retaining the knowledge learned. He looks forward to the crates every month and he has created a special place in his bedroom to display all the projects he has done.'
    },
    {
      name:'Alex Birro',
      profesion:'Marcetolog',
      imgSrc:'https://fullyfilmy.in/cdn/shop/files/The-Boys_AI_MOCKUP.jpg?v=1696405510',
      comment:'Creativity is the ability to develop new, surprising and valuable ideas - and it is an essential skill of the 21st century. All of these are available at the Republic of Toys Factory!'
    },
  
 
  ]

}
