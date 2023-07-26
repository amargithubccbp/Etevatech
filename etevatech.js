function getUniqueUsers(list1, list2) {
    const set1 = new Set(list1);
    const set2 = new Set(list2);
    
    const uniqueInList1 = new Set([...set1].filter(user => !set2.has(user)));
    const uniqueInList2 = new Set([...set2].filter(user => !set1.has(user)));
    const intersection = new Set([...set1].filter(user => set2.has(user)));
    
    return {
        uniqueInList1: [...uniqueInList1],
        uniqueInList2: [...uniqueInList2],
        intersection: [...intersection]
    };
}
const list1 = ['Arjun', 'Adwait', 'Swapnil', 'Amit', 'Vishal', 'Adnan'];
const list2 = ['Adwait', 'Laxman', 'Amit', 'Adnan', 'Nitin', 'Gaurav'];

const result = getUniqueUsers(list1, list2);
console.log('Unique in List:', result.uniqueInList1);
console.log('Unique in List2:', result.uniqueInList2);
console.log('Intersection:', result.intersection);