import { Navigate, useLocation, useNavigate } from "react-router-dom";

let temp: any = null;

export default function({element, meta, handleRouteBefore}: any) {
  meta = meta || {};
  const location = useLocation();
  const { pathname }: any = location;
  const navigate: any = useNavigate();

  if (handleRouteBefore) {
    if (temp === element) return element;
    const pathRes = handleRouteBefore({ pathname, meta });
    const pathResType: any = Object.prototype.toString.call(pathRes).match(/s(w+)]/)?.[1] || '';
    if (pathResType === 'Promise') {
      pathRes.then((res: any) => {
        if (res && res !== pathname) {
          navigate(res, { replace: true });
        }
      })
    } else {
      if (pathRes && pathRes !== pathname) {
        element = <Navigate to={pathRes} replace />
      }
    }
  }

  temp = element;
  return element;
}