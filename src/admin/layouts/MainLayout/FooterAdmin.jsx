import * as React from "react";

function MyComponent() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex gap-5 justify-between w-full text-base font-medium max-w-[1269px] text-black text-opacity-60 max-md:flex-wrap max-md:max-w-full">
        <div className="flex gap-5 px-5 my-auto">
          <div>Quản lý phim</div>
          <div className="flex-auto">Quản lý suất chiếu</div>
        </div>
        <div className="flex gap-2.5 justify-end px-5">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1401b1af7f26eee41edff129e1cfeb831fa6f306fe5de1664769778b6ded3811?"
            className="shrink-0 w-5 aspect-square"
          />
          <div className="my-auto">Báo cáo</div>
        </div>
      </div>
      <div className="self-stretch mt-6 w-full border border-solid bg-black bg-opacity-30 border-black border-opacity-30 min-h-[1px] max-md:max-w-full" />
      <div className="flex gap-5 px-5 mt-9 w-full text-base max-w-[1269px] max-md:flex-wrap max-md:max-w-full">
        <div className="flex-auto my-auto font-medium text-black">
          Quản lý danh sách phim
        </div>
        <div className="flex gap-5 px-12 py-3.5 font-bold text-white bg-blue-500 max-md:px-5">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8530b29d503eeed1c54d1a3e21eaa09caf85d971bc5d7671b7f358b3ba00d716?"
            className="shrink-0 w-5 aspect-square"
          />
          <div className="flex-auto">Thêm mới phim</div>
        </div>
      </div>
      <div className="self-stretch mt-8 w-full border border-solid bg-black bg-opacity-30 border-black border-opacity-30 min-h-[1px] max-md:max-w-full" />
      <div className="flex overflow-hidden relative flex-col items-end pt-20 pr-4 pb-5 pl-20 mt-7 w-full max-w-[1400px] min-h-[495px] max-md:pl-5 max-md:max-w-full">
        <img
          loading="lazy"
          srcSet="..."
          className="object-cover absolute inset-0 size-full"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/57a328cd052fb576f3737ff3907848d4946f5f1eb7d881854a7adae4c70bbbb5?"
          className="mt-4 aspect-[2.94] w-[83px]"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/57a328cd052fb576f3737ff3907848d4946f5f1eb7d881854a7adae4c70bbbb5?"
          className="mt-6 aspect-[2.94] w-[83px]"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/57a328cd052fb576f3737ff3907848d4946f5f1eb7d881854a7adae4c70bbbb5?"
          className="mt-6 aspect-[2.94] w-[83px]"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/57a328cd052fb576f3737ff3907848d4946f5f1eb7d881854a7adae4c70bbbb5?"
          className="mt-6 aspect-[2.94] w-[83px]"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/57a328cd052fb576f3737ff3907848d4946f5f1eb7d881854a7adae4c70bbbb5?"
          className="mt-11 aspect-[2.94] w-[83px] max-md:mt-10"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/57a328cd052fb576f3737ff3907848d4946f5f1eb7d881854a7adae4c70bbbb5?"
          className="mt-7 aspect-[2.94] w-[83px]"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/57a328cd052fb576f3737ff3907848d4946f5f1eb7d881854a7adae4c70bbbb5?"
          className="mt-11 aspect-[2.94] w-[83px] max-md:mt-10"
        />
      </div>
      <img
        loading="lazy"
        srcSet="..."
        className="mt-20 max-w-full aspect-[1.96] w-[291px] max-md:mt-10"
      />
    </div>
  );
}
