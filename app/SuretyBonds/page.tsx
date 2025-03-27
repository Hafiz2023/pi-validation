"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search } from "lucide-react";

export default function SuretyBonds() {
  const [caseNo, setCaseNo] = useState("");
  const [cnic, setCnic] = useState("");

  const handleSearch = () => {
    console.log("Searching for:", { caseNo, cnic });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <Card className="w-full max-w-3xl shadow-lg">
        <CardHeader>
          <CardTitle className="text-blue-600">Surety Bonds</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
            <div>
              <label className="block text-gray-700 font-medium">Case No.</label>
              <Input
                type="text"
                placeholder="Enter Case No."
                value={caseNo}
                onChange={(e) => setCaseNo(e.target.value)}
                className="mt-1"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">Guarantor CNIC</label>
              <Input
                type="text"
                placeholder="____-_______-_"
                value={cnic}
                onChange={(e) => setCnic(e.target.value)}
                className="mt-1 w-full"
              />
            </div>
            <div className="flex justify-end md:justify-start">
              <Button
                onClick={handleSearch}
                className="bg-green-600 hover:bg-green-700 text-white flex items-center space-x-2"
              >
                <Search size={16} />
                <span>Search</span>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}