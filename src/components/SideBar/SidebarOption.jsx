import { Add } from "@material-ui/icons";



function SidebarOption() {
  return (
    <div className="sidebarOptions flex-col ">
      <div className="sidebarOption flex items-center p-3 cursor-pointer w-36 hover:bg-gray-300 hover:rounded-md">
        <img className="h-7 ml-5 "  style={{ borderRadius: '5px' }}
          src="https://qphs.fs.quoracdn.net/main-thumb-t-930-100-cbbsbwijdhpyzlpipejvqpiijhhoaday.jpeg"
          alt=""
        />
        <p className="ml-2 text-gray-700 font-normal text-sm ">History</p>
      </div>

      <div className="sidebarOption flex items-center p-3 cursor-pointer w-36 hover:bg-gray-300 hover:rounded-md">
        <img className="h-7 ml-5 "  style={{ borderRadius: '5px' }}
          src="https://qphs.fs.quoracdn.net/main-thumb-t-858-100-VnZbEVtOIGkEHXlnYId9slumV59IPgkA.jpeg"
          alt=""
        />

        <p className="ml-2 text-gray-700 font-normal text-sm " >Business</p>
      </div>
      <div className="sidebarOption flex items-center p-3 cursor-pointer w-36 hover:bg-gray-300 hover:rounded-md">
        <img className="h-7 ml-5 "  style={{ borderRadius: '5px' }}
          src="https://qphs.fs.quoracdn.net/main-thumb-t-1913-100-B8JrwaVauFzsaTSqXDqoWLCXzQb2mTE9.jpeg"
          alt=""
        />
        <p className="ml-2 text-gray-700 font-normal text-sm ">Psychology</p>
      </div>

      <div className="sidebarOption flex items-center p-3 cursor-pointer w-36 hover:bg-gray-300 hover:rounded-md">
        <img className="h-7 ml-5 "  style={{ borderRadius: '5px' }}
          src="https://qphs.fs.quoracdn.net/main-thumb-t-877-100-e7jKHEQr0HExAIA9rlsyHlV6HJyRruEo.jpeg"
          alt=""
        />
        <p className="ml-2 text-gray-700 font-normal text-sm ">Cooking</p>
      </div>

      <div className="sidebarOption flex items-center p-3 cursor-pointer w-36 hover:bg-gray-300 hover:rounded-md">
        <img className="h-7 ml-5 "  style={{ borderRadius: '5px' }}
          src="https://qphs.fs.quoracdn.net/main-thumb-t-801-100-Sf8h894FXbQZQit0TeqDrrqS6xw6dwCQ.jpeg"
          alt=""
        />
        <p className="ml-2 text-gray-700 font-normal text-sm ">Music</p>
      </div>

      <div className="sidebarOption flex items-center p-3 cursor-pointer w-36 hover:bg-gray-300 hover:rounded-md">
        <img className="h-7 ml-5 "  style={{ borderRadius: '5px' }}
          src="https://qphs.fs.quoracdn.net/main-thumb-t-931-100-c8WCPwZ9qPsh5zLGQ5wHh1ddxtc9Cch7.jpeg"
          alt=""
        />
        <p className="ml-2 text-gray-700 font-normal text-sm ">Science</p>
      </div>

      <div className="sidebarOption flex items-center p-3 cursor-pointer w-36 hover:bg-gray-300 hover:rounded-md">
        <img className="h-7 ml-5 "  style={{ borderRadius: '5px' }}
          src="https://qphs.fs.quoracdn.net/main-thumb-t-1140-100-24q3tiv4WhPssc5TGwf0mvCM5aiqGVXW.jpeg"
          alt=""
        />
        <p className="ml-2 text-gray-700 font-normal text-sm ">Health</p>
      </div>

      <div className="sidebarOption flex items-center p-3 cursor-pointer w-36 hover:bg-gray-300 hover:rounded-md">
        <img className="h-7 ml-5 "  style={{ borderRadius: '5px' }}
          src="https://qphs.fs.quoracdn.net/main-thumb-t-843-100-W7FzODceTO2aQmp8D7E4rKZ8YgSv21eR.jpeg"
          alt=""
        />
        <p className="ml-2 text-gray-700 font-normal text-sm ">Movies</p>
      </div>

      <div className="sidebarOption flex items-center p-3 cursor-pointer w-36 hover:bg-gray-300 hover:rounded-md">
        <img className="h-7 ml-5 "  style={{ borderRadius: '5px' }}
          src="https://qphs.fs.quoracdn.net/main-thumb-t-2177-100-JiR07D1TQSfeQzRvWXomVaY4Poj2f8Yb.jpeg"
          alt=""
        />
        <p className="ml-2 text-gray-700 font-normal text-sm ">Technology</p>
      </div>

      <div className="sidebarOption flex items-center p-3 cursor-pointer w-36 hover:bg-gray-300 hover:rounded-md">
        <img className="h-7 ml-5 "  style={{ borderRadius: '5px' }}
          src="https://qphs.fs.quoracdn.net/main-thumb-t-996-100-bfZBQjeEenKKl8fcNY4tVv0FyArtB0Mb.jpeg"
          alt=""
        />
        <p className="ml-2 text-gray-700 font-normal text-sm ">Education</p>
      </div>
      <div className="sidebarOption flex items-center p-3 cursor-pointer w-36 hover:bg-gray-300 hover:rounded-md">
        <Add />
        <p className="text ml-6 text-gray-600 font-normal text-sm">Discover Spaces</p>
      </div>
    </div>
  );
}

export default SidebarOption;