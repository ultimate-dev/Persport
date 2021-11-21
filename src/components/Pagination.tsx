class PaginationProps {
  count?: number;
  onChange?: (value: number) => void;
  value?: number;
}
export default ({
  count = 0,
  value = 0,
  onChange = () => {},
}: PaginationProps) => {
  return (
    <div className="flex -mx-1 w-full justify-end">
      {value - 1 !== 0 && (
        <div
          className="border border-secondary-300 hover:bg-white hover:text-secondary flex items-center justify-center w-8 h-8 mx-1"
          onClick={() => onChange(value - 1)}
        >
          <i className="ri-arrow-left-s-line" />
        </div>
      )}
      {Array(count)
        .fill(0)
        .map((c, index) => (
          <div
            className={
              "pointer border border-secondary-300 hover:bg-white hover:text-secondary flex items-center justify-center w-8 h-8 mx-1" +
              (value == index + 1 ? " bg-white text-secondary" : "")
            }
            onClick={() => onChange(index + 1)}
          >
            <span className="font-medium">{index + 1}</span>
          </div>
        ))}
      {value  !== count && (
        <div
          className="border border-secondary-300 hover:bg-white hover:text-secondary flex items-center justify-center w-8 h-8 mx-1"
          onClick={() => onChange(value + 1)}
        >
          <i className="ri-arrow-right-s-line" />
        </div>
      )}
    </div>
  );
};
