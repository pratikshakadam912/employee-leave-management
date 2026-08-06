import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import { Building2 } from "lucide-react";

import { getReportsData } from "../../services/manager.service";

export default function DepartmentChart() {
  const [data, setData] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const res = await getReportsData();

      setData(res.data.departmentStats || []);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-[30px] bg-white p-8 shadow-lg"
    >
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Department Leaves</h2>

          <p className="text-slate-500">Leave requests by department</p>
        </div>

        <div className="rounded-2xl bg-blue-100 p-4">
          <Building2 className="text-blue-600" />
        </div>
      </div>

      <div className="h-[330px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="4 4" />

            <XAxis dataKey="department" />

            <YAxis />

            <Tooltip />

            <Bar dataKey="leaves" fill="#10B981" radius={[12, 12, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}
