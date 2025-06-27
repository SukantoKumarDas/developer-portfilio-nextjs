import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import uniLogo from '@/../public/assets/images/uni.png';
import collegeLogo from '@/../public/assets/images/college.png';
import schoolLogo from '@/../public/assets/images/school.png';

export default function Education() {
    return (
        <div id="education">
            <div className="p-2 sm:p-10">
                <h1 className="text-5xl font-bold text-center">Education Background</h1>
                <div className="mt-10 flex flex-row flex-wrap gap-4 justify-center items-center">
                    <Card className="w-100">
                        <CardHeader className="flex flex-col items-center gap-2">
                            <Image alt="School logo" src={uniLogo} height={200}></Image>
                            <CardTitle className="text-sm mt-2">Shahjalal University of Science and Technology</CardTitle>
                            <CardDescription>B. Sc. in Computer Science and Engineering</CardDescription>
                        </CardHeader>
                        <CardContent className="flex flex-col items-center gap-2">
                            <p> Batch of : 2017-18</p>
                            <p> Passing Year : 2023</p>
                            <p> C.G.P.A. 3.52 out of 4 </p>
                        </CardContent>
                    </Card>
                    <Card className="w-100">
                        <CardHeader className="flex flex-col items-center gap-2">
                            <Image alt="School logo" src={collegeLogo} height={200}></Image>
                            <CardTitle className="text-sm mt-2">Khulna Public College</CardTitle>
                            <CardDescription>Higher Secoendary School Certificate</CardDescription>
                        </CardHeader>
                        <CardContent className="flex flex-col items-center gap-2">
                            <p> Batch of : 2015</p>
                            <p> Passing Year : 2017</p>
                            <p> G.P.A. 4.5 out of 5 </p>
                        </CardContent>
                    </Card>
                    <Card className="w-100">
                        <CardHeader className="flex flex-col items-center gap-2">
                            <Image alt="School logo" src={schoolLogo} height={200}></Image>
                            <CardTitle className="text-sm mt-2">Saint Josephe&lsquo;s High School Khulna</CardTitle>
                            <CardDescription>Secoendary School Certificate</CardDescription>
                        </CardHeader>
                        <CardContent className="flex flex-col items-center gap-2">
                            <p> Batch of : 2017-18</p>
                            <p> Passing Year : 2015</p>
                            <p> G.P.A. 5 out of 5 </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}