import { useState } from 'react';

const BlockWrapper = ({ mouseEnterCallbak, children }) => {
    const [ isActive, setActive ] = useState(false);

    const mouseEnterHandler = () => {
        setActive(true);
        mouseEnterCallbak();
    };

    return (
        <div onMouseEnter={mouseEnterHandler} className={ isActive ? 'active': '' }>
            {children}
        </div>
    );
};

const Block1 = ({ mouseEnterCallbak, imgSrc, imgAlt }) => (
    <BlockWrapper mouseEnterCallbak={mouseEnterCallbak}>
        <img src={imgSrc} alt={imgAlt} />
    </BlockWrapper>
);

const Block2 = ({ mouseEnterCallbak, content }) => (
    <BlockWrapper mouseEnterCallbak={mouseEnterCallbak}>
        <p>BLock2 content: {content}</p>
    </BlockWrapper>
);
