import { SVGProps } from "react";

interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  className?: string;
}

const IconBase = ({
  size = 24,
  viewBox = "0 0 1000 1000",
  className = "",
  ...props
}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox={viewBox}
      fill="currentColor"
      className={className}
      {...props}
    />
  );
};

export const HideIcon = ({ className = "", ...props }: IconProps) => (
  <IconBase className={`solaris-icon ${className}`} {...props}>
    <path
      d="M809.208,350.568l-43.17,43.17c47.061,31.481,87.2,69.038,113.545,105.978-29.782,41.6-77.4,84.079-132.916,117.815a543.936,543.936,0,0,1-60.236,31.655A240.332,240.332,0,0,0,728.646,431.13l-50.895,50.895q0.855,8.747.869,17.722a179.994,179.994,0,0,1-180,180q-8.971,0-17.722-.869L416.177,743.6a429.382,429.382,0,0,0,70.742,6.022c4.017,0,8.04.129,12.081,0.129s8.064-.129,12.081-0.129C698.665,749.621,888.51,617.406,950,499.75,923.359,448.774,872.989,395.073,809.208,350.568ZM120.417,499.784C150.2,458.19,197.82,415.7,253.333,381.968a545.253,545.253,0,0,1,55.918-29.694,240.373,240.373,0,0,0-38.318,223.517l49.622-49.622A180.093,180.093,0,0,1,525.042,321.682l64.736-64.736a432.184,432.184,0,0,0-76.7-7.066c-4.017,0-8.041-.13-12.081-0.13s-8.064.13-12.081,0.13C301.335,249.88,111.491,382.093,50,499.75c27.215,52.073,79.192,106.99,144.932,152.043l43.24-43.241C189.3,576.514,147.541,537.822,120.417,499.784ZM823.218,136L504.458,454.76,403.918,555.3,133.25,825.969,186.281,879,462.012,603.269,602.14,463.141l274.11-274.11Z"
      style={{ fillRule: "evenodd" }}
    />
  </IconBase>
);

export const ShowIcon = ({ className = "", ...props }: IconProps) => (
  <IconBase className={`solaris-icon ${className}`} {...props}>
    <path
      d="M513.081,250.129c-4.017,0-8.041-.129-12.081-0.129s-8.064.129-12.081,0.129C301.335,250.129,111.491,382.343,50,500c61.491,117.656,249.335,249.871,436.919,249.871,4.017,0,8.04.129,12.081,0.129s8.064-.129,12.081-0.129C698.665,749.871,888.51,617.656,950,500,888.51,382.343,700.665,250.129,513.081,250.129ZM498.62,680a180,180,0,1,1,180-180A180,180,0,0,1,498.62,680Zm-378.2-179.963c29.782-41.595,77.4-84.081,132.916-117.816a545.263,545.263,0,0,1,55.918-29.695,239.848,239.848,0,0,0,.78,295.942,537.117,537.117,0,0,1-57.553-30.6C197.469,584.226,150.153,541.734,120.417,500.034Zm626.25,117.747a544.106,544.106,0,0,1-60.236,31.655,239.784,239.784,0,0,0-.761-299.823,536.07,536.07,0,0,1,61.852,32.517c55.01,33.642,102.326,76.136,132.061,117.836C849.8,541.564,802.185,584.045,746.667,617.781ZM597.931,453.153a48.227,48.227,0,1,1-62.472-56.6A109.731,109.731,0,1,0,597.931,453.153Z"
      style={{ fillRule: "evenodd" }}
    />
  </IconBase>
);

export const WarnIcon = ({ className = "", ...props }: IconProps) => (
  <IconBase className={`solaris-icon ${className}`} {...props}>
    <path
      d="M863.641,699.619l0.008,0L571.982,199.365l-0.008,0a83.294,83.294,0,0,0-143.948,0l-0.007,0L137.068,698.386l-0.031.053-0.685,1.176,0.007,0A83.369,83.369,0,0,0,208.334,825H791.667A83.369,83.369,0,0,0,863.641,699.619ZM628.9,689.894a34.271,34.271,0,0,1-48.477,0L500,609.432l-80.423,80.462a34.285,34.285,0,1,1-48.469-48.5l80.421-80.454-77.562-77.6a34.288,34.288,0,0,1,48.479-48.5l77.56,77.6,77.559-77.6a34.287,34.287,0,1,1,48.474,48.5l-77.56,77.6L628.9,641.391A34.318,34.318,0,0,1,628.9,689.894Z"
      style={{ fillRule: "evenodd" }}
    />
  </IconBase>
);

export const SuccessIcon = ({ className = "", ...props }: IconProps) => (
  <IconBase className={`solaris-icon ${className}`} {...props}>
    <path
      d="M500,75C265.279,75,75,265.279,75,500S265.279,925,500,925,925,734.721,925,500,734.721,75,500,75ZM722.051,339.988l-254.642,320-0.007-.006a39.635,39.635,0,0,1-62.125,0l-0.006.005-127.321-160,0.006-.006a40.142,40.142,0,0,1,2.928-53.267l15.915-16a39.612,39.612,0,0,1,54.022-2.077l0.006-.008L428.382,515,663.77,285.818l0.006,0.008A39.734,39.734,0,0,1,730.77,315a39.952,39.952,0,0,1-8.726,24.981Z"
      style={{ fillRule: "evenodd" }}
    />
  </IconBase>
);

export const UnauthorizedIcon = ({ className = "", ...props }: IconProps) => (
  <IconBase className={`solaris-icon ${className}`} {...props}>
    <path
      d="M500,75c234.721,0,425,190.279,425,425S734.721,925,500,925,75,734.721,75,500,265.279,75,500,75ZM825,500A324.9,324.9,0,0,0,325.748,225.574L774.426,674.252A323.377,323.377,0,0,0,825,500ZM200.5,626.474A324.912,324.912,0,0,0,674.252,774.426L225.574,325.748A325.857,325.857,0,0,0,200.5,626.474Z"
      style={{ fillRule: "evenodd" }}
    />
  </IconBase>
);

export const Icons = {
  HideEye: HideIcon,
  ShowEye: ShowIcon,
  Warn: WarnIcon,
  Success: SuccessIcon,
  Unauthorized: UnauthorizedIcon,
};

export default Icons;
