// import React from 'react'
import StandardLayout from "../components/Layout/StandardLayout";
import MainBanner from "../components/banners/MainBanner";
import StandardCarousel from "../components/carousel/StandardCarousel";
import StandardContainerGroup from "../components/containers/StandardContainerGroup";
import LinkGroup from "../components/links/LinkGroup";

//Images for containers
import img1 from "../images/iphone.jpg";
import img2 from "../images/ipad.jpg";
import img3 from "../images/airpods.jpg";
import img4 from "../images/iwatch.jpg";

//Moview Images for carousel
import mov1 from "../images/movies/1.jpg";
import mov2 from "../images/movies/2.jpg";
import mov3 from "../images/movies/3.jpg";
import mov4 from "../images/movies/4.jpg";
import mov5 from "../images/movies/5.jpg";
import mov6 from "../images/movies/6.jpg";
import mov7 from "../images/movies/7.jpg";
import mov8 from "../images/movies/8.jpg";

// all the imports should be have at the top of the react file

//array for container images
const DATA = [
  //json object
  {
    title: "iPhone",
    description: "Amazing experience",
    image: img1,
    style: "bg-gray-100",
  },
  {
    title: "iPad",
    description: "Lovable, Drawable, Magical",
    image: img2,
    style: "bg-gray-200",
  },
  {
    title: "Airpods",
    description: "Rebuilt from the sound up",
    image: img3,
    style: "bg-gray-200",
  },
  {
    title: "iWatch",
    description: "A healthy leap ahead",
    image: img4,
    style: "bg-gray-100",
  },
];

//array for carousel images
const CAROUSEL_DATA = [
  {
    image: mov1,
    imageAlt: "Seventh son",
  },
  {
    image: mov2,
    imageAlt: "Aqua man",
  },
  {
    image: mov3,
    imageAlt: "Londan has fallen",
  },
  {
    image: mov4,
    imageAlt: "Pirates of carabian",
  },
  {
    image: mov5,
    imageAlt: "Thor",
  },
  {
    image: mov6,
    imageAlt: "Hobbit",
  },
  {
    image: mov7,
    imageAlt: "Farin",
  },
  {
    image: mov8,
    imageAlt: "300",
  },
];

function home() {
  return (
    <StandardLayout>
      {/* 1)Main Banner */}
      <MainBanner />

      {/* 2)Box Components */}
      <StandardContainerGroup data={DATA} />

      {/* 3)Carousel */}
      <StandardCarousel data={CAROUSEL_DATA} />

      {/* 4)Page Content */}
      <div className="px-[200px] bg-gray-200">
        {/* 4.1)Main Content */}
        <p className="py-5 text-sm text-gray-700">
          Sint pariatur deserunt irure magna do officia qui minim deserunt
          velit. Non sint officia reprehenderit sunt. Et in ipsum officia
          consectetur. Veniam fugiat quis in sit. Nostrud proident non do magna
          qui. Ipsum nisi labore amet occaecat ipsum amet pariatur voluptate et
          magna exercitation culpa consequat. Qui consectetur irure culpa cillum
          excepteur non ea do pariatur laborum. Consequat qui do consequat ipsum
          cillum et commodo adipisicing. In mollit ipsum ad amet aute mollit
          cillum. Magna aliquip nulla in aliquip nulla et ipsum labore aliquip
          ullamco sint fugiat occaecat consequat. Eiusmod anim occaecat enim qui
          reprehenderit anim occaecat elit ex in ex ipsum dolore. Anim anim aute
          do qui esse dolor laboris aliquip incididunt cillum minim tempor. Ea
          sunt esse commodo culpa sit adipisicing laborum dolor magna deserunt
          minim magna ullamco. Cupidatat nulla consequat aliqua laborum laboris
          tempor aute quis nostrud dolore id sint ipsum Lorem. Proident amet
          reprehenderit et enim labore ad est cupidatat excepteur eiusmod in
          laboris. Cupidatat nulla sunt ut commodo occaecat fugiat quis fugiat
          velit sit quis sunt. Magna aliquip est laborum commodo non eiusmod
          laborum laboris cupidatat aliqua amet ex pariatur fugiat. Commodo
          ipsum consectetur mollit ullamco nostrud sint amet proident. Duis
          reprehenderit nostrud culpa occaecat non nostrud et ipsum in
          incididunt. Elit eu sit enim aliqua nulla proident. Quis enim deserunt
          pariatur deserunt laboris sint ad cillum excepteur ea minim do. Minim
          nulla veniam aliqua ex tempor in. In labore culpa tempor anim officia
          in laborum. Nulla labore in excepteur sunt aute dolore dolore ex quis
          consectetur fugiat non sit. Excepteur eiusmod veniam ut incididunt
          reprehenderit nostrud labore id anim consequat reprehenderit
          excepteur. Do aliquip eu laborum consectetur labore in labore
          adipisicing minim. Quis occaecat nulla cillum cupidatat exercitation
          velit sit commodo in. Sit velit sint laboris consequat. Exercitation
          eiusmod mollit officia officia labore nostrud commodo Lorem id
          exercitation Lorem fugiat. Proident dolor consequat tempor aliqua non
          sunt exercitation id id. Id minim nostrud ex reprehenderit commodo
          aute aliquip in eu tempor id. Irure aute est amet cupidatat incididunt
          minim. Mollit culpa laborum qui sit exercitation. Ut reprehenderit
          nulla officia amet et culpa incididunt. Magna est occaecat adipisicing
          sit non aliquip anim. Ullamco tempor Lorem aliqua enim culpa ad nulla
          et labore quis. Quis nostrud mollit reprehenderit reprehenderit velit
          adipisicing.
        </p>

        {/* 4.2)Sub links */}
        <LinkGroup />
      </div>
    </StandardLayout>
  );
}

export default home;
