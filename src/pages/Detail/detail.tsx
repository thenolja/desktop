import { Outlet } from "react-router-dom";

const Detail = ({...restProps}) => {
  return(
    <>
      <div {...restProps}>
        detail page
      </div>
      {/* 내비게이션 추가 */}
      <Outlet />
    </>
  )
}

export default Detail;