import Image from 'next/image'
import Navbar from '../components/Navbar';
import '../style/style.css'
import Frame from '../components/Frame';
import Footer from '../components/Footer';
import b1 from '../../../public/images/b1.png';
import b2 from '../../../public/images/b2.png';
import b3 from '../../../public/images/b3.png';
import b4 from '../../../public/images/b4.png';
import b5 from '../../../public/images/b5.png';
import b6 from '../../../public/images/b6.png';
import b7 from '../../../public/images/b7.png';
import b8 from '../../../public/images/b8.png';

export default function BlogPage() {
  return (
    <div>
        <Navbar />
        <div className="blog-background h-[316px]"></div>
        <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8 ">
        {/* Main Content */}
        <main className="flex-1">
            {/* First Blog Post */}
            <article className="mb-12">
            <Image 
                src={b1}
                alt="Laptop on wooden desk" 
                width={800}
                height={400}
                className="w-full h-auto object-cover mb-4"
            />
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-2">
                <span className="flex items-center gap-2">
                <Image src={b4} alt="Admin avatar" width={20} height={20} className="rounded-full" />
                Admin
                </span>
                <span>14 Oct 2022</span>
                <span>Wood</span>
            </div>
            <h2 className="text-2xl font-bold mb-3">Going all-in with millennial design</h2>
            <p className="text-gray-600 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin
                aliquam ultrices. Morbi blandit cursus risus ut ultrices mi tempus imperdiet. Libero enim sed faucibus turpis
                in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit
                ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.
            </p>
            <a href="#" className="text-gray-600 hover:text-gray-800">
                Read more
            </a>
            </article>

            {/* Second Blog Post */}
            <article className="mb-12">
            <Image 
                src={b2} 
                alt="Hands writing on paper" 
                width={800}
                height={400}
                className="w-full h-auto object-cover mb-4"
                />
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-2">
                <span className="flex items-center gap-2">
                <Image src={b5} alt="Admin avatar" width={20} height={20} className="rounded-full" />
                Admin
                </span>
                <span>14 Oct 2022</span>
                <span>Handmade</span>
            </div>
            <h2 className="text-2xl font-bold mb-3">Exploring new ways of decorating</h2>
            <p className="text-gray-600 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin
                aliquam ultrices. Morbi blandit cursus risus ut ultrices mi tempus imperdiet. Libero enim sed faucibus turpis
                in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit
                ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.
            </p>
            <a href="#" className="text-gray-600 hover:text-gray-800">
                Read more
            </a>
            </article>

            {/* Third Blog Post */}
            <article className="mb-12">
            <Image 
                src={b3} 
                alt="Coffee and laptop setup" 
                width={800}
                height={400}
                className="w-full h-auto object-cover mb-4"
                />
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-2">
                <span className="flex items-center gap-2">
                <Image src={b5} alt="Admin avatar" width={20} height={20} className="rounded-full" />
                Admin
                </span>
                <span>14 Oct 2022</span>
                <span>Wood</span>
            </div>
            <h2 className="text-2xl font-bold mb-3">Handmade pieces that took time to make</h2>
            <p className="text-gray-600 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin
                aliquam ultrices. Morbi blandit cursus risus ut ultrices mi tempus imperdiet. Libero enim sed faucibus turpis
                in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit
                ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.
            </p>
            <a href="#" className="text-gray-600 hover:text-gray-800">
                Read more
            </a>
            </article>
        </main>

        {/* Sidebar */}
        <aside className="w-full lg:w-80">

            {/* Search */}
            <div className="mb-8">
            <input 
                type="search"
                placeholder="Search"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200"
            />
            </div>

            {/* Categories */}
            <div className="mb-8">
            <h3 className="text-xl font-bold mb-4">Categories</h3>
            <div className="space-y-2">
                <div className="flex justify-between items-center">
                <span className="text-gray-600">Crafts</span>
                <span className="text-gray-400">2</span>
                </div>
                <div className="flex justify-between items-center">
                <span className="text-gray-600">Design</span>
                <span className="text-gray-400">8</span>
                </div>
                <div className="flex justify-between items-center">
                <span className="text-gray-600">Handmade</span>
                <span className="text-gray-400">7</span>
                </div>
                <div className="flex justify-between items-center">
                <span className="text-gray-600">Interior</span>
                <span className="text-gray-400">1</span>
                </div>
                <div className="flex justify-between items-center">
                <span className="text-gray-600">Wood</span>
                <span className="text-gray-400">6</span>
                </div>
            </div>
            </div>

            {/* Recent Posts */}
            <div>
            <h3 className="text-xl font-bold mb-4">Recent Posts</h3>
            <div className="space-y-4">
                <a href="#" className="flex items-center gap-4 group">
                <Image 
                    src={b4}
                    alt="Recent post thumbnail" 
                    width={60}
                    height={60}
                    className="w-[60px] h-[60px] object-cover"
                    />
                <div className="flex-1">
                    <h4 className="text-sm font-medium group-hover:text-gray-600">Going all-in with millennial design</h4>
                    <p className="text-xs text-gray-500">03 Aug 2022</p>
                </div>
                </a>
                <a href="#" className="flex items-center gap-4 group">
                <Image 
                    src={b5}
                    alt="Recent post thumbnail" 
                    width={60}
                    height={60}
                    className="w-[60px] h-[60px] object-cover"
                    />
                <div className="flex-1">
                    <h4 className="text-sm font-medium group-hover:text-gray-600">Exploring new ways of decorating</h4>
                    <p className="text-xs text-gray-500">03 Aug 2022</p>
                </div>
                </a>
                <a href="#" className="flex items-center gap-4 group">
                <Image 
                    src={b6} 
                    alt="Recent post thumbnail" 
                    width={60}
                    height={60}
                    className="w-[60px] h-[60px] object-cover"
                    />
                <div className="flex-1">
                    <h4 className="text-sm font-medium group-hover:text-gray-600">Handmade pieces that took time to make</h4>
                    <p className="text-xs text-gray-500">03 Aug 2022</p>
                </div>
                </a>
                <a href="#" className="flex items-center gap-4 group">
                <Image 
                    src={b7}
                    alt="Recent post thumbnail" 
                    width={60}
                    height={60}
                    className="w-[60px] h-[60px] object-cover"
                />
                <div className="flex-1">
                    <h4 className="text-sm font-medium group-hover:text-gray-600">Modern home in Milan</h4>
                    <p className="text-xs text-gray-500">03 Aug 2022</p>
                </div>
                </a>
                <a href="#" className="flex items-center gap-4 group">
                <Image 
                    src={b8}
                    alt="Recent post thumbnail" 
                    width={60}
                    height={60}
                    className="w-[60px] h-[60px] object-cover"
                    />
                <div className="flex-1">
                    <h4 className="text-sm font-medium group-hover:text-gray-600">Colorful office redesign</h4>
                    <p className="text-xs text-gray-500">03 Aug 2022</p>
                </div>
                </a>
            </div>
            </div>
        </aside>
        </div>
        <div className="flex justify-center ">
            <button className="px-6 py-3 border rounded-md text-lg font-bold bg-[#F9F1E7]  text-[#000000]  hover:shadow-md hover:bg-[#B88E2F] hover:text-white transition-all m-3">1</button>
            <button className="px-6 py-3 border rounded-md text-lg font-bold bg-[#F9F1E7] text-[#000000]  hover:shadow-md hover:bg-[#B88E2F] hover:text-white transition-all m-3">2</button>
            <button className="px-6 py-3 border rounded-md text-lg font-bold bg-[#F9F1E7] text-[#000000]  hover:shadow-md hover:bg-[#B88E2F] hover:text-white transition-all m-3">3</button>
            <button className="px-6 py-3 border rounded-md text-lg font-bold bg-[#F9F1E7] text-[#000000]  hover:shadow-md hover:bg-[#B88E2F] hover:text-white transition-all m-3">Next</button>
      </div>
      <Frame />
      <Footer />
    </div>
  )
}

