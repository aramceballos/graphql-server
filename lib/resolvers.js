const courses = [
  {
    _id: 785687,
    title: 'React Avanzado',
    teacher: 'Midudev',
    description: 'Curso de React Avanzado',
    topic: 'Programacion',
  },
  {
    _id: 165841,
    title: 'Graphql Basico',
    teacher: 'Morfeo',
    description: 'Curso basico de Graphql',
    topic: 'Programacion',
  },
  {
    _id: 78527,
    title: 'CRUD en Python',
    teacher: 'David Aroesti',
    description: 'Curso de creacion de CRUD en Python',
    topic: 'Programacion',
  },
];

module.exports = {
  courses: () => courses,
};
