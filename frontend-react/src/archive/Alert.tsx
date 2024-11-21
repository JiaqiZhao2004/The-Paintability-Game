/**
 * @unused This component is unused
 */

import { ReactNode } from "react";

interface Props {
    children: ReactNode;
    onClose: () => void;
}

const Alert = ({ children, onClose }: Props) => {
  return (
    <div className="alert alert-primary alert-dismissible fade show">{children}
      <button type='button' className='btn-close' data-dismiss="alert" onClick={onClose}></button>
    </div>
  )
}

export default Alert