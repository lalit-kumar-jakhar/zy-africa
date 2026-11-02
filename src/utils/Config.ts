import dayjs from "dayjs";

export const blogDate = (createdAt: string | number | Date): string => {
  return dayjs(createdAt).format("DD MMM YYYY");
};
