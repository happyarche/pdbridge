import React from 'react';

export type IconProps = {
    color?: string;
    size?: string | number;
} & React.SVGAttributes<SVGElement>;

const Icon: React.FC<IconProps> = (props) => {
    // Icon 컴포넌트 구현
    return <svg {...props}></svg>;
};

export default Icon;