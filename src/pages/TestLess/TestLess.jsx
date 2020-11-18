import { Button } from "antd";
import React from "react";
import "./TestLess.less";

function TestLess() {
    return (
        <div className="testless">
            hello test less
            <div className="test" >test 001</div>
            <Button> test Button</Button>
        </div>
    )
}

export default TestLess;