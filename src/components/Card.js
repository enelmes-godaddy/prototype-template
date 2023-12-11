import classNames from "classnames";
import './Card.scss';

function Example(props) {
    const { children, cardClassName } = props;

    return (
        <div className={classNames("card", "mx-auto", "my-0", "p-xl", cardClassName)}>
            {children}
        </div >
    );
}

export default Example;