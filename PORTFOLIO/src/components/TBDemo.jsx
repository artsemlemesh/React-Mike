import { twMerge } from "tailwind-merge";
import { TracingBeam } from "./TracingBeam";
import dummyContent from "./dummy";

export function TracingBeamDemo() {
    return (
      <TracingBeam className="px-6">
        <div className="max-w-2xl mx-auto antialiased pt-4 relative">
          {dummyContent.map((item, index) => (
            <div key={`content-${index}`} className="mb-10">
              <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
                {item.badge}
              </h2>
   
              {/* <p className={twMerge(calsans.className, "text-xl mb-4")}>
                {item.title}
              </p> */}
   
              <div className="text-sm  prose prose-sm dark:prose-invert">
                {item?.image && (
                  <img
                    src={item.image}
                    alt="blog thumbnail"
                    height="1000"
                    width="1000"
                    className="rounded-lg mb-10 object-cover"
                  />
                )}
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </TracingBeam>
    );
  }
   

  export default TracingBeamDemo