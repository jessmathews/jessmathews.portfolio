function romanize (num) {
    if (!+num)
        return false;
    var digits = String(+num).split(""),
        key    = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
                  "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
                  "","I","II","III","IV","V","VI","VII","VIII","IX"],
        roman  = "",
        i      = 3;
    while (i--)
        roman = (key[+digits.pop() + (i * 10)] || "") + roman;
    return Array(+digits.join("") + 1).join("M") + roman;
}

const Footer = () => {
  return (
    <footer className="w-full py-8 mt-auto border-t border-white/10 bg-primary">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        <div className="text-2xl font-semibold mb-4  hover:text-accent transition-all md:mb-0">
          Jess Mathews<span className="text-accent jumping-char">.</span>
        </div>
        <p className="text-gray-500 text-sm">
          &copy; {romanize(new Date().getFullYear())} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
