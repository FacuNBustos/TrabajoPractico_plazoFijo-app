
function useInputFilter(cadena) {
    try{
        let arrayString = cadena.trim().split(" ");
        if(arrayString.length != 2) throw '400';
        else {
            arrayString.map((elem, index) => {
                arrayString[index] = elem.charAt(0).toUpperCase() + elem.slice(1).toLowerCase();
            })
            return arrayString;
        }
    }catch (error){
        return 'Error';
    }
}

module.exports = useInputFilter;
