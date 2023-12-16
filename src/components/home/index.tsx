import type { NextPage } from "next";
import Link from "next/link";

const HomeCom: NextPage = () => {
    return (
        <div className="relative bg-black w-full h-[60rem] overflow-hidden text-left text-[1.88rem] text-white font-ligconsolata">
            <div className="absolute top-[-33.14rem] left-[-0.19rem] rounded-[50%] bg-tomato-200 [filter:blur(400px)] w-[44.06rem] h-[44.06rem]" />
            <div className="absolute top-[70.34rem] left-[44.62rem] rounded-[50%] bg-tomato-100 [filter:blur(400px)] w-[61.56rem] h-[45.19rem] [transform:_rotate(-32.52deg)] [transform-origin:0_0] opacity-[0.5]" />
            <div className="absolute top-[4.44rem] left-[2.5rem] w-[78.19rem] h-[36.26rem]">
                <div className="absolute top-[0rem] left-[0rem] w-[20.75rem] h-[4.35rem] text-black">
                    <div className="absolute top-[0.69rem] left-[0.56rem] rounded-2xs bg-white w-[20.19rem] flex flex-row items-center justify-center py-[0.86rem] px-[2rem] box-border">
                        <div className="relative uppercase">IN Progress</div>
                    </div>
                    <div className="absolute top-[0rem] left-[0rem] rounded-2xs bg-goldenrod flex flex-row items-center justify-center py-[0.86rem] px-[2rem] border-[1.2px] border-solid border-black">
                        <div className="relative uppercase">Front-end Task</div>
                    </div>
                </div>
                <div className="absolute top-[5.85rem] left-[0rem] w-[78.19rem] h-[10.88rem] text-[9.57rem] font-inter">
                    <div className="absolute top-[0rem] left-[0rem] leading-[10.87rem] font-semibold">
                        M4yours Editor
                    </div>
                    <Link href="/editor">
                    <img
                        className="absolute top-[3.58rem] left-[72.94rem] w-[5.25rem] h-[5.25rem] object-cover"
                        alt=""
                        src="/Group_2.png"
                    />
                    </Link>
                </div>
            </div>
            <div className="absolute top-[31.82rem] left-[12.5rem] text-[3.75rem] font-semibold font-inter text-tomato-100">{`Drag and Drop `}</div>
        </div>
    );
};

export default HomeCom;
