export default function dbTime(str) {
    return str.replace('T' , ' ').substring(0, 16);
}