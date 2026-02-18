import Slidr from '@/Component/Slidr'
import TrandingProduct from '@/Component/TrandingProduct'

export default async function HomeSlider() {
  

  return (
    <div>
      <div className="w-full">
        <Slidr/>

      </div>


      {/* shop by category */}
      {/* <div className="w-11/12 mx-auto my-4">
          <p className="text-4xl text-gray-600">Shop by Categories</p>
          <Catagory/>
      </div> */}

      <div>
          <TrandingProduct/>
      </div>
    </div>

  );
}
