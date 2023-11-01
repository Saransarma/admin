export const userColumn = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "name", headerName: "Name", width: 130 },
  { field: "location", headerName: "Location", width: 130 },
  {
    field: "telno",
    headerName: "Telephone No",
    type: "number",
    width: 130,
  },
  {
    field: "email",
    headerName: "Email",
    width: 160,
  },
  {
    field: "date",
    headerName: "Date of Joined",
    type: "date",
    width: 100,
    valueGetter: (params) => {
      const dateValue = params.row.date;
      return new Date(dateValue);
    },
  },
  {
    field: "premium",
    headerName: "Premium",
    width: 90,
  },
];

export const userRows = [
  {
    id: 1,
    name: "Saran",
    location: "Jaffna",
    telno: "0768669760",
    email: "si@gmail.com",
    date: "1.10.2023",
    premium: "Premium",
  },
];
