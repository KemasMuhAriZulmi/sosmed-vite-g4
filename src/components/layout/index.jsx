import Sidebar from "../sidebar";

const layout = () => {
  return(
    <>
      <Sidebar />
      <div className="flex flex-col justify-center items-center">
        <div className="w-full max-w-5xl mx-auto">
          <Profile />
        </div>
      </div>
    </>
  )
}

export default layout;