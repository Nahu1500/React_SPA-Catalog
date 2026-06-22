interface FooterProps {
  year?: number;
}

export const Footer: React.FC<FooterProps> = ({
  year = new Date().getFullYear(),
}) => {
  return (
    <footer className="footer">
      <p>&copy; {year} Rick and Morty Characters. All rights reserved.</p>
    </footer>
  );
};
