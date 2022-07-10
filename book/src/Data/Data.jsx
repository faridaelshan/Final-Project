import img0 from "../assets/img/hummingbird-printed-t-shirt.jpg"
import img0h from "../assets/img/hummingbird-printed-t-shirt (1).jpg"
import img1 from "../assets/img/brown-bear-printed-sweater.jpg"
import img1h from "../assets/img/brown-bear-printed-sweater (1).jpg"
import img2 from "../assets/img/the-best-is-yet-to-come-framed-poster.jpg"
import img2h from "../assets/img/the-best-is-yet-to-come-framed-poster (2).jpg"
import img3 from "../assets/img/the-adventure-begins-framed-poster.jpg"
import img3h from "../assets/img/the-adventure-begins-framed-poster (2).jpg"
import img4 from "../assets/img/today-is-a-good-day-framed-poster.jpg"
import img4h from "../assets/img/today-is-a-good-day-framed-poster (2).jpg"
import img5 from "../assets/img/mug-the-best-is-yet-to-come.jpg"
import img5h from "../assets/img/mug-the-best-is-yet-to-come (2).jpg"
import img6 from "../assets/img/mug-the-adventure-begins.jpg"
import img6h from "../assets/img/mug-the-adventure-begins (1).jpg"
import img7 from "../assets/img/mug-today-is-a-good-day.jpg"
import img7h from "../assets/img/mug-today-is-a-good-day (1).jpg"
import img8 from "../assets/img/mountain-fox-cushion.jpg"
import img8h from "../assets/img/mountain-fox-cushion (1).jpg"
import img9 from "../assets/img/brown-bear-cushion (1).jpg"
import img9h from "../assets/img/brown-bear-cushion.jpg"
import img10 from "../assets/img/hummingbird-cushion.jpg"
import img10h from "../assets/img/hummingbird-cushion (1).jpg"
import img11 from "../assets/img/mountain-fox-vector-graphics.jpg"
import img11h from "../assets/img/mountain-fox-vector-graphics.jpg"
import img12 from "../assets/img/brown-bear-vector-graphics.jpg"
import img12h from "../assets/img/brown-bear-vector-graphics.jpg"
import img13 from "../assets/img/hummingbird-vector-graphics.jpg"
import img13h from "../assets/img/hummingbird-vector-graphics.jpg"
import img14 from "../assets/img/pack-mug-framed-poster.jpg"
import img14h from "../assets/img/pack-mug-framed-poster.jpg"
import img15 from "../assets/img/mountain-fox-notebook.jpg"
import img15h from "../assets/img/mountain-fox-notebook (1).jpg"
import img16 from "../assets/img/brown-bear-notebook.jpg"
import img16h from "../assets/img/brown-bear-notebook (1).jpg"
import img17 from "../assets/img/hummingbird-notebook.jpg"
import img17h from "../assets/img/hummingbird-notebook.jpg"
import img18 from "../assets/img/customizable-mug.jpg"
import img18h from "../assets/img/customizable-mug (1).jpg"
import author0 from "../assets/img/aut-1.png"
import author1 from "../assets/img/aut-2.png"
import author2 from "../assets/img/aut-3.png"
import author3 from "../assets/img/aut-4.png"
import author4 from "../assets/img/aut-5.png"
import author5 from "../assets/img/aut-7.png"
import blog0 from '../assets/img/b-blog-7.jpg'
import blog1 from '../assets/img/b-blog-6.jpg'
import blog2 from '../assets/img/b-blog-5.jpg'
import blog3 from '../assets/img/b-blog-4.jpg'
import blog4 from '../assets/img/b-blog-3.jpg'
import blog5 from '../assets/img/b-blog-2.jpg'
import blog6 from '../assets/img/b-blog-1.jpg'

const Data ={
    product:[
        {
            id:0,
            img:img0,
            hoverimg:img0h,
            name:"The Classic Harry Potter Series",
            title:"The Classic Harry...",
            desc:"Regular fit, round neckline, short sleeves. Made of extra long staple pima cotton.",
            price:19.12,
            category:"FANTASY",
            type:"bestselling",
            group:"veiwed",
            language:"aze",
            janr:"dedektiv",
            sale:"$23.90"
        },
        {
            id:1,
            img:img1,
            hoverimg:img1h,
            name:"They Both Die At The End",
            title:"They Both Die At...",
            desc:"Regular fit, round neckline, short sleeves. Made of extra long staple pima cotton.",
            price:28.72,
            category:"LITERATURE",
            type:"bestselling",
            group:"sale",
            language:"aze",
            janr:"elmi",
            sale:"$35.90"
        },
        {
            id:2,
            img:img2,
            hoverimg:img2h,
            name:"The Song Of Achilles",
            title:"The Song Of Achilles",
            type:"bestselling",
            group:"featured",
            language:"en",
            janr:"elmi",
            price:29.00,
            category:"COMEDY"
        },
        {
            id:3,
            img:img3,
            hoverimg:img3h,
            name:"The Sanatorium",
            title:"The Sanatorium",
            type:"bestselling",
            group:"sale",
            language:"tr",
            janr:"Fərdi inkişaf - Motivasiya",
            price:29.00,
            category:"COMEDY"
        },
        {
            id:4,
            img:img4,
            hoverimg:img4h,
            name:"The Desolations of Devil's Acre",
            title:"The Desolations Of Devil's...",
            type:"bestselling",
            group:"veiwed",
            language:"ru",
            janr:"Ailə - Uşaq tərbiyyəsi",
            price:29.00,
            category:"COMEDY"
        },
        {
            id:5,
            img:img5,
            hoverimg:img5h,
            language:"en",
            janr:"Din və mədəniyyət",
            name:"The Overstory (Pulitzer Prize Winner)",
            title:"The Overstory (Pulitzer...",
            type:"bestselling",
            group:"featured",
            price:11.90,
            category:"CRIME"
        },
        {
            id:6,
            img:img6,
            hoverimg:img6h,
            language:"az3",
            janr:"Uşaq ədəbiyyatı",
            name:"The Four Winds",
            title:"The Four Winds",
            group:"veiwed",
            price:11.90,
            category:"CRIME"
        },
        {
            id:7,
            img:img7,
            hoverimg:img7h,
            janr:"Elmi-fantastika",
            name:"The Midnight Library",
            title:"The Midnight Library",
            group:"featured",
            price:11.90,
            category:"CRIME"
        },
        {
            id:8,
            img:img8,
            hoverimg:img8h,
            name:"The Vanishing Half",
            title:"The Vanishing Half",
            group:"sale",
            janr:"Bioqrafiya",
            price:18.90,
            category:"CRIME"
        },
        {
            id:9,
            img:img9,
            hoverimg:img9h,
            name:"The Splendid And The Vile",
            title:"The Splendid And The Vile",
            group:"featured",
            janr:"Dedektiv",
            price:18.90,
            category:"CRIME"
        },
        {
            id:10,
            img:img10,
            hoverimg:img10h,
            name:"Dune",
            title:"Dune",
            janr:"Klassik",
            group:"veiwed",
            price:18.90,
            category:"CRIME"
        },
        {
            id:11,
            img:img11,
            hoverimg:img11h,
            name:"The Psychopath: A True Story",
            title:"The Psychopath: A True Story",
            group:"featured",
            janr:"Roman",
            price:9.00,
            category:"COMEDY"
        },
        {
            id:12,
            img:img12,
            hoverimg:img12h,
            name:"Philips Soundbar speaker TAPB405/98",
            title:"Philips Soundbar Speaker...",
            group:"sale",
            janr:"Jurnal",
            price:9.00,
            category:"COMEDY"
        },
        {
            id:13,
            img:img13,
            hoverimg:img13h,
            name:"Oral-B Pro 500 Rechargeable Electric Toothbrush",
            title:"Oral-B Pro 500 Rechargeable...",
            group:"featured",
            janr:"Təhsil",
            price:9.00,
            category:"COMEDY"
        },
        {
            id:14,
            img:img14,
            hoverimg:img14h,
            name:"When Truth Is All You Have: A Memoir of Faith, Justice, and Freedom for the Wrongly Convicted",
            title:"When Truth Is All You Have:...",
            price:35.00,
            janr:"Elmi",
            group:"sale",
            category:"CRIME"
        },
        {
            id:15,
            img:img15,
            hoverimg:img15h,
            name:"Mi Desk Lamp 1S",
            title:"Mi Desk Lamp 1S",
            group:"sale",
            janr:"Digər",
            price:12.90,
            category:"ART & PHOTOGRAPHY"
        },
        {
            id:16,
            img:img16,
            hoverimg:img16h,
            name:"Eight Perfect Murders",
            title:"Eight Perfect Murders",
            group:"sale",
            price:12.90,
            category:"ART & PHOTOGRAPHY"
        },
        {
            id:17,
            img:img17,
            hoverimg:img17h,
            name:"Tokyo Ghoul Monster Edition, Volume 3",
            group:"featured",
            title:"Tokyo Ghoul Monster...",
            price:12.90,
            category:"ART & PHOTOGRAPHY"
        },
        {
            id:18,
            img:img18,
            hoverimg:img18h,
            name:"Petals to the Metal (B&N Exclusive Edition)",
            title:"Petals To The Metal (B&N...",
            price:13.90,
            group:"sale",
            category:"CRIME"
        },
        {
            id:19,
            img:img0,
            hoverimg:img0h,
            name:"The Classic Harry Potter Series",
            title:"The Classic Harry...",
            desc:"Regular fit, round neckline, short sleeves. Made of extra long staple pima cotton.",
            price:19.12,
            category:"FANTASY",
            type:"bestselling",
            group:"veiwed",
            sale:"$23.90"
        },
        {
            id:20,
            img:img1,
            hoverimg:img1h,
            name:"They Both Die At The End",
            title:"They Both Die At...",
            desc:"Regular fit, round neckline, short sleeves. Made of extra long staple pima cotton.",
            price:28.72,
            category:"LITERATURE",
            janr:"Bədii ədəbiyyat",
            type:"bestselling",
            group:"veiwed",
            sale:"$35.90"
        },
        {
            id:21,
            img:img2,
            hoverimg:img2h,
            name:"The Song Of Achilles",
            title:"The Song Of Achilles",
            type:"bestselling",
            group:"veiwed",
            price:29.00,
            category:"COMEDY"
        },
        {
            id:22,
            img:img3,
            hoverimg:img3h,
            name:"The Sanatorium",
            title:"The Sanatorium",
            type:"bestselling",
            group:"veiwed",
            price:29.00,
            category:"COMEDY"
        },
        {
            id:23,
            img:img4,
            hoverimg:img4h,
            name:"The Desolations of Devil's Acre",
            title:"The Desolations Of Devil's...",
            type:"bestselling",
            group:"veiwed",
            price:29.00,
            category:"COMEDY"
        },
        {
            id:24,
            img:img5,
            hoverimg:img5h,
            name:"The Overstory (Pulitzer Prize Winner)",
            title:"The Overstory (Pulitzer...",
            type:"bestselling",
            group:"featured",
            price:11.90,
            category:"CRIME"
        },
        {
            id:25,
            img:img6,
            hoverimg:img6h,
            name:"The Four Winds",
            title:"The Four Winds",
            group:"sale",
            price:11.90,
            category:"CRIME"
        },
        {
            id:26,
            img:img7,
            hoverimg:img7h,
            name:"The Midnight Library",
            title:"The Midnight Library",
            group:"featured",
            price:11.90,
            category:"CRIME"
        },
        {
            id:27,
            img:img8,
            hoverimg:img8h,
            name:"The Vanishing Half",
            title:"The Vanishing Half",
            group:"sale",
            price:18.90,
            category:"CRIME"
        },
        {
            id:28,
            img:img9,
            hoverimg:img9h,
            name:"The Splendid And The Vile",
            title:"The Splendid And The Vile",
            group:"veiwed",
            price:18.90,
            category:"CRIME"
        },
        {
            id:29,
            img:img10,
            hoverimg:img10h,
            name:"Dune",
            title:"Dune",
            group:"featured",
            price:18.90,
            category:"CRIME"
        },
        {
            id:30,
            img:img11,
            hoverimg:img11h,
            name:"The Psychopath: A True Story",
            title:"The Psychopath: A True Story",
            group:"featured",
            price:9.00,
            category:"COMEDY"
        },
        {
            id:31,
            img:img12,
            hoverimg:img12h,
            name:"Philips Soundbar speaker TAPB405/98",
            title:"Philips Soundbar Speaker...",
            group:"sale",
            price:9.00,
            category:"COMEDY"
        },
        {
            id:32,
            img:img13,
            hoverimg:img13h,
            name:"Oral-B Pro 500 Rechargeable Electric Toothbrush",
            title:"Oral-B Pro 500 Rechargeable...",
            group:"sale",
            price:9.00,
            category:"COMEDY"
        },
        {
            id:33,
            img:img14,
            hoverimg:img14h,
            name:"When Truth Is All You Have: A Memoir of Faith, Justice, and Freedom for the Wrongly Convicted",
            title:"When Truth Is All You Have:...",
            price:35.00,
            group:"featured",
            category:"CRIME"
        },
        {
            id:34,
            img:img15,
            hoverimg:img15h,
            name:"Mi Desk Lamp 1S",
            title:"Mi Desk Lamp 1S",
            group:"veiwed",
            price:12.90,
            category:"ART & PHOTOGRAPHY"
        },
        {
            id:35,
            img:img16,
            hoverimg:img16h,
            name:"Eight Perfect Murders",
            title:"Eight Perfect Murders",
            group:"veiwed",
            price:12.90,
            category:"ART & PHOTOGRAPHY"
        }
    ],
    author:[
        {
            id:0,
            name:"Linda Heyes",
            img:author0
        },
        {
            id:1,
            name:"Jennifer Doe",
            img:author1
        },
        {
            id:2,
            name:"Adam Stras",
            img:author2
        },
        {
            id:3,
            name:"James Coleman",
            img:author3
        },
        {
            id:4,
            name:"Adam Stra",
            img:author4
        },
        {
            id:5,
            name:"Jennifer Doe",
            img:author5
        },
        {
            id:6,
            name:"Linda Heyes",
            img:author1
        },
        {
            id:7,
            name:"Linda Heyes",
            img:author1
        },
        {
            id:8,
            name:"Jennifer Doe",
            img:author5
        }
    ]
}

export default Data