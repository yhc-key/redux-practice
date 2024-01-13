import { Fragment } from "react";

import { useSelector } from "react-redux";

export default function Counter() {
    const count = useSelector((state) => state.auth.count);
    
    return <Fragment>
        <hr/>
        {count}
    </Fragment>
}