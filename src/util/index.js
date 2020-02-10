export function createStyleFactory(styles) {
    return (additionalStyles = []) => [...styles, additionalStyles]
}

