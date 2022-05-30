export const calcRange = (startCoord, finalCoord) => {
    return Math.abs(finalCoord.y - startCoord.y) + Math.abs(finalCoord.x - startCoord.x);
}