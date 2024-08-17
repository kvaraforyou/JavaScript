function printWeekday() {
let dayIndex = new Date().getDay();
let days = [
    'კვირა',
    'ორშაბათი',
    'სამშაბათი',
    'ოთხშაბათი',
    'ხუთშაბათი',
    'პარასკევი',
    'შაბათი',
];

console.log(`დღეს არის ${days[dayIndex]}`);
}
printWeekday()