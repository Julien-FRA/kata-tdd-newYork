export const calcRange = (startCoord, finalCoord) => {
    if ((finalCoord.x >= 0) && (finalCoord.y >= 0) && (startCoord.x >= 0) && (startCoord.y >= 0)) {
        return Math.abs(finalCoord.y - startCoord.y);
    }
    if ((finalCoord.x <= 0) && (finalCoord.y <= 0) && (startCoord.x <= 0) && (startCoord.y <= 0)) {
        return Math.abs(startCoord.y - finalCoord.y);
    }
    return startCoord.y + finalCoord.y;
}