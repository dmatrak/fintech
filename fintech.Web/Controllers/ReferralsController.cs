using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace fintech.Web.Controllers
{
    public class ReferralsController : Controller
    {
        // GET: Referrals
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Details()
        {
            return View();
        }

        // GET: Referrals/Details/5
        public ActionResult Details(int id)
        {
            return View();
        }

        // GET: Referrals/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: Referrals/Create
        [HttpPost]
        public ActionResult Create(FormCollection collection)
        {
            try
            {
                // TODO: Add insert logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

        // GET: Referrals/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: Referrals/Edit/5
        [HttpPost]
        public ActionResult Edit(int id, FormCollection collection)
        {
            try
            {
                // TODO: Add update logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

        // GET: Referrals/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: Referrals/Delete/5
        [HttpPost]
        public ActionResult Delete(int id, FormCollection collection)
        {
            try
            {
                // TODO: Add delete logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }
    }
}
