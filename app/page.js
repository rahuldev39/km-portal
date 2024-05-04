import Image from "next/image";
import Navbar from "./components/navbar/Navbar";
import Searchbar from "./components/Searchbar";
import HeaderCard from "./components/HeaderCard";
import { latestUpload, recentSearchData } from "./data/recentSearch";

export default function Home() {
  return (
    <>
      <Navbar navPosition="absolute" navBg='transparent'/>
      <header className="py-36 relative bg-blue-900">
          <img src="./header-bg.png" className="absolute w-full h-full start-0 top-0 object-cover" alt="" />
          <div className="absolute w-full h-full start-0 top-0 bg-gradient-to-r from-[#31399F] to-[#451C89] opacity-85"></div>
          <div className="container px-4 mx-auto relative">
              <div className="text-center mb-11">
                  <h1 className="text-5xl font-bold text-white mb-2">PowerMentis</h1>
                  <p className="text-lg text-white/75">Lorem ipsum dolor sit amet consectetur.</p>
              </div>
              <div className="max-w-4xl mx-auto flex flex-col gap-4">
                <Searchbar/>
                <div className="text-center">
                    <button className="bg-blue-800/30 hover:bg-blue-800/60 backdrop-blur-lg border-white border font-medium text-white py-3 px-4 rounded-lg">Search Document</button>
                </div>
              </div>
          </div>
      </header>
      <main>
        <section className="pb-24 relative -mt-16">
            <div className="container px-4 mx-auto">
                <div className="grid grid-cols-12 gap-4">
                    <div className=" xl:col-span-4 md:col-span-6 col-span-12 xl:col-start-3">
                        <HeaderCard title={'Recent search'}>
                            {
                              recentSearchData.length ? 
                              <ul className="flex flex-col divide-y divide-gray-200">
                                {
                                    recentSearchData.map(el=>{
                                      return(
                                        <li key={el.id} className="py-3 px-2 flex justify-between items-center gap-3">
                                          <a className="truncate text-sm text-gray-900 font-medium" href="">{el.search}</a>
                                          <span className="text-xs text-gray-500">{el.time}</span>
                                        </li>
                                      )
                                    })
                                }
                            </ul> :
                            <div className="text-center">
                                <div className="mb-3">
                                 <img src="./empty-item.svg" width={142} className="max-w-full mx-auto" alt="" />
                                </div>
                                <h6 className="text-gray-900 text-sm font-semibold">No Result Found !!</h6>
                            </div>
                            }
                        </HeaderCard>
                    </div>

                    <div className="xl:col-span-4 md:col-span-6 col-span-12">
                        <HeaderCard title={'Latest uploads'}>
                            {
                              latestUpload.length ? 
                              <ul className="flex flex-col divide-y divide-gray-200">
                              {
                                 
                                 latestUpload.map(el=>{
                                    return(
                                      <li key={el.id} className="py-3 px-2 flex justify-between items-center gap-3">
                                        <a className="truncate text-sm text-gray-900 font-medium flex items-center gap-2" href="">
                                          <div className="icon">
                                            <img src={`./${el.type==='doc' ? 'file-type-word.svg' : el.type==='pdf' ? 'file-type-pdf.svg' : 'file-type-excel.svg' }`} width={20} alt="" />
                                          </div>
                                          {el.file}</a>
                                        <span className="text-xs text-gray-500">{el.time}</span>
                                      </li>
                                    )
                                  })
                              }
                          </ul> :
                            <div className="text-center">
                                <div className="mb-3">
                                <img src="./empty-item.svg" width={142} className="max-w-full mx-auto" alt="" />
                                </div>
                                <h6 className="text-gray-900 text-sm font-semibold">No Result Found !!</h6>
                            </div>
                            }
                           
                        </HeaderCard>
                    </div>
                </div>
            </div>
        </section>
      </main>
    </>
  );
}
