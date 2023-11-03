import {Carousel} from './Carousel';

const IMAGES = [
  'https://picsum.photos/id/0/400/300',
  'https://picsum.photos/id/1/400/300',
  'https://picsum.photos/id/2/400/300',
  'https://picsum.photos/id/3/400/300',
  'https://picsum.photos/id/4/400/300',
  'https://picsum.photos/id/5/400/300',
  'https://picsum.photos/id/6/400/300',
  'https://picsum.photos/id/7/400/300',
  'https://picsum.photos/id/8/400/300',
  'https://picsum.photos/id/9/400/300',
  'https://picsum.photos/id/10/400/300',
  'https://picsum.photos/id/11/400/300',
  'https://picsum.photos/id/12/400/300',
  'https://picsum.photos/id/13/400/300',
  'https://picsum.photos/id/14/400/300',
];

function CarouselApp() {

  return (
    <>
      <div>
        <Carousel images={IMAGES} />
      </div>
    </>
  )
}

export default CarouselApp;
