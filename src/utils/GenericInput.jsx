/**
 * Input is a component that renders an HTML `input` element.
 *
 * The Input component receives any props passed to it and spreads them onto the `input` element using the JSX spread operator (`...`). This allows the component to be flexible and support any valid props for an `input` element.
 *
 * @component
 * @param {Object} props The props for the `input` element
 * @return {ReactElement} The JSX markup for the Input component
 */
const Input = ({...props}) => <input {...props} />

export default Input
