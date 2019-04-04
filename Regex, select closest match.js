const regex = /BLA(?:(?!BLA).)*?LOOK/g;
const str = `BLA text text text  text text text BLA text text text text LOOK text text text BLA text text BLA`;
let m;

while ((m = regex.exec(str)) !== null) {
    // This is necessary to avoid infinite loops with zero-width matches
    if (m.index === regex.lastIndex) {
        regex.lastIndex++;
    }
    
    // The result can be accessed through the `m`-variable.
    m.forEach((match, groupIndex) => {
        console.log(`Found match, group ${groupIndex}: ${match}`);
    });
}
