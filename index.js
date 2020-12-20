class Formatter {
    //add static methods here
    static capitalize(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    static sanitize(string) {
        // removes any non alpha-numeric characters except dash and single quotes (apostrophes)
        return string.replace(/[^A-Za-z0-9- ']+/g, '');
    }
    static titleize(string) {
        let a = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
        let arr = string.split(" ");

        let newArr = [this.capitalize(arr[0])]
        for (let i = 1; i < arr.length; i++) {
            if (a.includes(arr[i])) {
                newArr.push(arr[i])
            } else {
                newArr.push(this.capitalize(arr[i]))
            }


            // let word = arr[i];
            // if (arr != a)
            //     arr[i] = word[0].toUpperCase() + word.substring(1);
        }

        return newArr.join(" ");
    };
}