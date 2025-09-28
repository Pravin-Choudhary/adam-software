import SelectLocation from "./SelectLocation";
import SelectServices from "./SelectServices";
import SelectType from "./SelectType";
import { Button } from "./ui/button";


export default function FilterJobs() {
  return (
    <>
    <div className="flex justify-start gap-5 flex-wrap">
        <div className="flex gap-5 justify-start items-center flex-wrap">
            <div className="">
                <SelectServices/>
            </div>
            <div className="">
                <SelectLocation/>
            </div>
            <div>
                <SelectType/>
            </div>
        </div>
        <div className="flex gap-4 justify-evenly items-end flex-wrap">
            <Button>Filter</Button>
            <Button>Reset</Button>
        </div>
     </div>
    </>
  )
}
