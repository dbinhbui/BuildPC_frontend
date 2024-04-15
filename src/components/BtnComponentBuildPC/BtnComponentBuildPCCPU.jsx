import { Button } from "antd";
import React from "react";

const BtnComponentBuildPCCPU = ({size, bordered, styleButton, styleTextButton, textButton, disabled, ...rests }) => {
    return (
        <Button 
            style={{
                ...styleButton,
            }}
            size={size}
            {...rests}
            //icon={<SearchOutlined color={colorButton} style={{color:colorButton}}/>}
        >
            <span style={styleTextButton}>{textButton}</span>
        </Button>
    )
}

export default BtnComponentBuildPCCPU